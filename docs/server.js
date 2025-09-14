// Simple static server for local testing: node web/server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PORT = process.env.PORT || 8080;

const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ttf': 'font/ttf',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.txt': 'text/plain',
  '.css': 'text/css',
};

function serve(req, res) {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(ROOT, urlPath);
  if (urlPath === '/' || urlPath === '') filePath = path.join(ROOT, 'web', 'index.html');
  // Prevent directory traversal
  const normalized = path.normalize(filePath);
  if (!normalized.startsWith(ROOT)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  fs.stat(normalized, (err, stat) => {
    if (err) {
      res.writeHead(404); res.end('Not found'); return;
    }
    let target = normalized;
    if (stat.isDirectory()) target = path.join(normalized, 'index.html');
    fs.readFile(target, (err2, data) => {
      if (err2) { res.writeHead(404); res.end('Not found'); return; }
      const ext = path.extname(target).toLowerCase();
      res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });
}

http.createServer(serve).listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}`);
});
