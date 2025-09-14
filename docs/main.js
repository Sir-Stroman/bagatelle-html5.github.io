// Manual placement (pre-XML parser): shapes 6, 7 (in sprite 8), and sprite 14

const VW = 512;
const VH = 576;

class BootScene extends Phaser.Scene {
  constructor() { 
    super('boot'); 
    console.log('BootScene: Constructor called');
  }
  preload() { 
    console.log('BootScene: Preloading manifest...');
    this.load.json('manifest', 'web/assets-manifest.json'); 
  }
  create() { 
    console.log('BootScene: Create called');
    const manifest = this.cache.json.get('manifest') || {};
    console.log('BootScene: Manifest loaded:', manifest);
    console.log('BootScene: Starting LoadScene...');
    this.scene.start('load', { manifest }); 
  }
}

class LoadScene extends Phaser.Scene {
  constructor() { 
    super('load'); 
    console.log('LoadScene: Constructor called');
  }
  init(data) { 
    console.log('LoadScene: Init called with data:', data);
    this.manifest = data.manifest || {}; 
  }
  preload() {
    console.log('LoadScene: Starting preload...');
    const DPR = Math.max(1, window.devicePixelRatio || 1);
    
    // DefineShape(6): bounds (-22.60, -29.45)[543.40 x 530.45] px
    console.log('LoadScene: Loading shape6...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape6');
      this.load.svg('shape6', 'web/shapes/6.svg', { width: Math.round(543.4 * DPR), height: Math.round(530.45 * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape6');
      this.load.image('shape6', 'web/shapes/6.svg');
    }

    // DefineShape(7): RECT in twips ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ ~408.6 x 170.45 px
    console.log('LoadScene: Loading shape7...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape7');
      this.load.svg('shape7', 'web/shapes/7.svg', { width: Math.round((8172/20) * DPR), height: Math.round((3409/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape7');
      this.load.image('shape7', 'web/shapes/7.svg');
    }

    // DefineShape(9): Xmin=-297,Xmax=10389,Ymin=-394,Ymax=11430 twips
    console.log('LoadScene: Loading shape9...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape9');
      this.load.svg('shape9', 'web/shapes/9.svg', { width: Math.round(((10389-(-297))/20) * DPR), height: Math.round(((11430-(-394))/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape9');
      this.load.image('shape9', 'web/shapes/9.svg');
    }

    // DefineShape(10): Xmin=3073,Xmax=14447,Ymin=-1,Ymax=11921 twips
    console.log('LoadScene: Loading shape10...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape10');
      this.load.svg('shape10', 'web/shapes/10.svg', { width: Math.round(((14447-3073)/20) * DPR), height: Math.round(((11921-(-1))/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape10');
      this.load.image('shape10', 'web/shapes/10.svg');
    }

    // DefineShape(11): Xmin=-1492,Xmax=11476,Ymin=-2542,Ymax=12096 twips
    console.log('LoadScene: Loading shape11...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape11');
      this.load.svg('shape11', 'web/shapes/11.svg', { width: Math.round(((11476-(-1492))/20) * DPR), height: Math.round(((12096-(-2542))/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape11');
      this.load.image('shape11', 'web/shapes/11.svg');
    }

    // DefineShape(12): bounds (-20,-17.5)[40x35] px (from sprite 13 bounds)
    console.log('LoadScene: Loading shape12...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape12');
      this.load.svg('shape12', 'web/shapes/12.svg', { width: Math.round(40 * DPR), height: Math.round(35 * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape12');
      this.load.image('shape12', 'web/shapes/12.svg');
    }

    // DefineShape(15): RECT Xmax=5980,Ymax=9807 twips -> ~299 x 490.35 px
    console.log('LoadScene: Loading shape15...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape15');
      this.load.svg('shape15', 'web/shapes/15.svg', { width: Math.round((5980/20) * DPR), height: Math.round((9807/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape15');
      this.load.image('shape15', 'web/shapes/15.svg');
    }
    
    // DefineShape(17): RECT Xmax=2262,Ymax=1954 twips -> ~113.1 x 97.7 px
    console.log('LoadScene: Loading shape17...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape17');
      this.load.svg('shape17', 'web/shapes/17.svg', { width: Math.round((2262/20) * DPR), height: Math.round((1954/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape17');
      this.load.image('shape17', 'web/shapes/17.svg');
    }

    // DefineShape(19): Xmin=-5000,Xmax=15000,Ymin=-5000,Ymax=15000 twips -> 1000 x 1000 px
    console.log('LoadScene: Loading shape19...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape19');
      this.load.svg('shape19', 'web/shapes/19.svg', { width: Math.round(((15000-(-5000))/20) * DPR), height: Math.round(((15000-(-5000))/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape19');
      this.load.image('shape19', 'web/shapes/19.svg');
    }

    // DefineShape(27): RECT Xmin=400,Xmax=8572,Ymin=6340,Ymax=9748 twips
    console.log('LoadScene: Loading shape27...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape27');
      this.load.svg('shape27', 'web/shapes/27.svg', { width: Math.round(((8572-400)/20) * DPR), height: Math.round(((9748-6340)/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape27');
      this.load.image('shape27', 'web/shapes/27.svg');
    }

    // DefineShape(28): RECT Xmax=7649,Ymax=9807 twips -> ~382.45 x 490.35 px
    console.log('LoadScene: Loading shape28...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape28');
      this.load.svg('shape28', 'web/shapes/28.svg', { width: Math.round((7649/20) * DPR), height: Math.round((9807/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape28');
      this.load.image('shape28', 'web/shapes/28.svg');
    }

    // DefineShape(33): RECT Xmin=-4086,Xmax=4086,Ymin=-1704,Ymax=1704 twips -> ~408.6 x 170.4 px doubled width
    console.log('LoadScene: Loading shape33...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape33');
      this.load.svg('shape33', 'web/shapes/33.svg', { width: Math.round(((4086 - (-4086))/20) * DPR), height: Math.round(((1704 - (-1704))/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape33');
      this.load.image('shape33', 'web/shapes/33.svg');
    }

    // DefineShape(34): RECT Xmin=-2672,Xmax=11926,Ymin=10040,Ymax=16255 twips
    console.log('LoadScene: Loading shape34...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape34');
      this.load.svg('shape34', 'web/shapes/34.svg', { width: Math.round(((11926-(-2672))/20) * DPR), height: Math.round(((16255-10040)/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape34');
      this.load.image('shape34', 'web/shapes/34.svg');
    }

    // DefineShape(39): RECT Xmin=-1,Xmax=5281,Ymin=0,Ymax=1205 twips
    console.log('LoadScene: Loading shape39...');
    if (this.load.svg) {
      console.log('LoadScene: Using SVG loader for shape39');
      this.load.svg('shape39', 'web/shapes/39.svg', { width: Math.round(((5281-(-1))/20) * DPR), height: Math.round(((1205-0)/20) * DPR) });
    } else {
      console.log('LoadScene: Using image loader for shape39');
      this.load.image('shape39', 'web/shapes/39.svg');
    }

    // DefineSprite(23): load a representative frame image for debugging/visibility
    console.log('LoadScene: Loading sprite23 image for DefineSprite_23');
    this.load.image('sprite23', 'web/sprites/DefineSprite_23/1.png');

    // Add load progress logging
    this.load.on('progress', (value) => {
      console.log('LoadScene: Loading progress:', Math.round(value * 100) + '%');
    });

    this.load.on('complete', () => {
      console.log('LoadScene: All assets loaded successfully');
    });

    this.load.on('loaderror', (file) => {
      console.error('LoadScene: Failed to load:', file.key, file.src);
    });

    // Sounds
    try {
      this.load.audio('throw', 'web/sounds/1_throw.mp3');
      this.load.audio('pow', 'web/sounds/2_pow.mp3');
      this.load.audio('hit', 'web/sounds/3_hit.mp3');
      console.log('LoadScene: Queued audio assets');
    } catch (e) {
      console.warn('LoadScene: Audio load not supported', e);
    }
  }
  create() { 
    console.log('LoadScene: Create called, starting GameScene...');
    this.scene.start('game'); 
  }
}

class GameScene extends Phaser.Scene {
  constructor() { 
    super('game'); 
    console.log('GameScene: Constructor called');
  }
  create() {
    console.log('GameScene: Create called');
    // Detect embed mode via URL parameter ?embed=1 to hide intro prompts and global click
    try {
      const params = new URLSearchParams(window.location.search);
      this.embedMode = params.get('embed') === '1' || params.get('embed') === 'true';
      // Crop overlay can be toggled by URL for tuning (no guides)
      this.enableCropOverlay = this.embedMode && (params.get('crop') === '1' || params.get('crop') === 'true');
      const defX = 6, defY = 38, defScale = 1;
      let cx = parseInt(params.get('cropx'));
      let cy = parseInt(params.get('cropy'));
      let sc = parseFloat(params.get('cropscale'));
      if (!Number.isFinite(cx)) cx = defX;
      if (!Number.isFinite(cy)) cy = defY;
      if (!Number.isFinite(sc) || sc <= 0) sc = defScale;
      this._embedCrop = { x: cx, y: cy };
      this._embedScale = sc;
      console.log('GameScene: embedMode =', this.embedMode);
    } catch(e) {
      this.embedMode = false;
      this.enableCropOverlay = false;
      this._embedCrop = { x: 6, y: 38 };
      this._embedScale = 1;
    }
    
    this.world = this.add.container(0,0);
    console.log('GameScene: World container created');
    // Auto-scale high-DPI vector textures back to logical size
    try {
      const factory = this.add;
      const _image = factory.image;
      const DPR = Math.max(1, window.devicePixelRatio || 1);
      factory.image = function(x, y, key, frame) {
        const img = _image.call(factory, x, y, key, frame);
        if (typeof key === 'string' && /^shape\d+$/i.test(key)) {
          img.setScale(1 / DPR);
        }
        return img;
      };
    } catch (e) { console.warn('Image factory patch failed', e); }
    // Improve crisp rendering of text and images
    try { this.cameras.main.roundPixels = true; } catch(e) {}
    
    this._resize();
    console.log('GameScene: Initial resize completed');
    
    this.scale.on('resize', () => {
      console.log('GameScene: Resize event triggered');
      this._resize();
      if (this._layoutUI) this._layoutUI();
    });

    // Stage origin crosshair
    console.log('GameScene: Drawing origin crosshair');
    this._drawOrigin();

    // Root: CharacterId 6 at (0,0), offset by bounds min
    console.log('GameScene: Creating sprite 6');
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);

    // Root: DefineSprite 8 at (400,6340) twips ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ (20,317) px; inside: CharacterId 7 at (0,0)
    console.log('GameScene: Creating sprite 8 with shape 7');
    const inst8 = this.add.container(20, 317);
    inst8.add(this.add.image(0, 0, 'shape7').setOrigin(0,0));
    this.world.add(inst8);

    // Root: DefineSprite 14 with full matrix
    console.log('GameScene: Creating sprite 14 with complex matrix');
    const a = 0.3996277, b = 0.015380859, c = -0.018173218, d = 0.3380432;
    const tx = 2656/20, ty = 2342/20;
    const scaleX = Math.sqrt(a*a + b*b);
    const scaleY = Math.sqrt(c*c + d*d);
    const rotation = Math.atan2(b, a);
    console.log('GameScene: Sprite 14 transform - scaleX:', scaleX, 'scaleY:', scaleY, 'rotation:', rotation, 'tx:', tx, 'ty:', ty);
    
    const sprite14 = this.add.container(tx, ty);
    sprite14.setScale(scaleX, scaleY);
    sprite14.setRotation(rotation);

    // Children of sprite 14
    console.log('GameScene: Adding children to sprite 14');
    // Shape 9 at (0,0) with bounds min (-14.85, -19.7)
    console.log('GameScene: Adding shape 9 to sprite 14');
    sprite14.add(this.add.image(-297/20, -394/20, 'shape9').setOrigin(0,0));
    
    // Shape 10 at translate (-3700,-486) twips ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ (-185,-24.3) px plus bounds min (Xmin=3073,Ymin=-1) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ (+153.65,-0.05)
    console.log('GameScene: Adding shape 10 to sprite 14');
    const shape10 = this.add.image(0,0,'shape10').setOrigin(0,0);
    shape10.setPosition((-3700/20) + (3073/20), (-486/20) + (-1/20));
    shape10.setAlpha(205/256);
    sprite14.add(shape10);
    
    // Shape 11 at (0,0) with bounds min (-74.6, -127.1)
    console.log('GameScene: Adding shape 11 to sprite 14');
    sprite14.add(this.add.image(-1492/20, -2542/20, 'shape11').setOrigin(0,0));
    
    // Sprite 13 at (4582,-7626) twips ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ (229.1, -381.3) px; inside: shape 12 at (-20,-17.5)
    console.log('GameScene: Adding sprite 13 to sprite 14');
    const sprite13 = this.add.container(4582/20, -7626/20); sprite13.setName('ball'); sprite13.setVisible(false); sprite13.add(this.add.image(-20, -17.5, 'shape12').setOrigin(0,0).setName('ballImage'));
    sprite14.add(sprite13);

    sprite14.setName('sprite14');
    // Make clickable to start game (AS2: on(press) startGame)
    sprite14.setInteractive(new Phaser.Geom.Rectangle(-300, -300, 600, 600), Phaser.Geom.Rectangle.Contains);
    sprite14.on('pointerdown', () => {
      console.log('GameScene: sprite14 pressed -> startGame');
      this._playSoundIndex(0);
      if (this.gGame) this.gGame.startGame();
    });
    this.world.add(sprite14);

    // Root: DefineSprite 16 (depth 63) with scale (0.7385, 0.6587) and translate (5640,3600) twips -> (282,180)
    console.log('GameScene: Creating sprite 16 with shape 15');
    {
      const cont16 = this.add.container(5640/20, 3600/20);
      cont16.setScale(0.7385254, 0.6587219);
      // Inside: CharacterId 15 (shape), at (0,0), bounds min 0,0
      if (this.textures.exists('shape15')) {
        console.log('GameScene: Shape 15 texture exists, adding to sprite 16');
        cont16.add(this.add.image(0,0,'shape15').setOrigin(0,0));
      } else {
        console.warn('GameScene: Shape 15 texture NOT found!');
      }
      this.world.add(cont16);
    }

    // Root: DefineSprite 18 (depth 65) with scale (0.2122, 0.1986) and translate (6040,7258) -> (302,362.9)
    console.log('GameScene: Creating sprite 18 with shape 17');
    {
      const cont18 = this.add.container(6040/20, 7258/20);
      cont18.setScale(0.21221924, 0.1986084);
      // Inside: CharacterId 17 (shape), at (0,0), bounds min 0,0
      if (this.textures.exists('shape17')) {
        console.log('GameScene: Shape 17 texture exists, adding to sprite 18');
        cont18.add(this.add.image(0,0,'shape17').setOrigin(0,0));
      } else {
        console.warn('GameScene: Shape 17 texture NOT found!');
      }
      this.world.add(cont18);
    }

    // Root: DefineEditText 25 (depth 83) and 26 (depth 84)
    console.log('GameScene: Creating edit texts');
    // Render as Phaser text using UseTheSchwarz font; initial text is blank per export
      const fontFamily = 'UseTheSchwarz, UseTheSchwarz, sans-serif';
      const DPR = Math.max(1, window.devicePixelRatio || 1);
      const styleBlack = { fontFamily, fontSize: '20px', color: '#000000', align: 'center', resolution: DPR };
      const styleWhite = { fontFamily, fontSize: '20px', color: '#ffffff', align: 'center', resolution: DPR };
      // EditText rect (assumed like 31/32): xmin=-40,xmax=9499,ymin=-40,ymax=1647 twips
      const cx = (-40 + 9499) / 2 / 20; // ~236.5 px
      const cy = (-40 + 1647) / 2 / 20; // ~40.2 px
      // chid25 (black overlay) at translate (300,300) twips ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â add first (under)
      const cont25 = this.add.container(300/20, 300/20);
      const tfBlack = this.add.text(cx, cy, "Fancy a game? 250 Neopoints and you're in!\nClick the board to play...", styleBlack).setOrigin(0.5, 0.5);
      cont25.add(tfBlack);
      this.world.add(cont25);
      // chid26 (white overlay) at translate (240,240) twips ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â add after (on top)
      const cont26 = this.add.container(240/20, 240/20);
      const tfWhite = this.add.text(cx, cy, "Fancy a game? 250 Neopoints and you're in!\nClick the board to play...", styleWhite).setOrigin(0.5, 0.5);
      cont26.add(tfWhite);
      this.world.add(cont26);
      this._introTFWhite = tfWhite;
      this._introTFBlack = tfBlack;

    // UI for frame selection and play (disabled in gameplay build)
    this.playFps = 32; // default SWF framerate

    // Global click-to-start on frame 17: anywhere except UI panel (always enabled)
    this.input.on('pointerdown', (pointer) => {
      if (!this.gGame) return;
      if (this.gGame.game_state !== this.gGame.st_wait) return;
      if (this._uiBounds) {
        const { x, y, width, height } = this._uiBounds;
        if (pointer.x >= x && pointer.x <= x + width && pointer.y >= y && pointer.y <= y + height) return;
      }
      console.log('GameScene: Global click -> startGame');
      this._playSoundIndex(0);
      this.gGame.startGame();
    });

    // Init AS2 game logic
    this._initGameLogic();

    console.log('GameScene: Initial setup complete');

    // Optional: Crop adjustment overlay for embed mode (no guides)
    if (this.enableCropOverlay) {
      this._initCropOverlay();
    }
    // Key toggle for crop overlay (K)
    this.input.keyboard.on('keydown-K', () => {
      this._toggleCropOverlay();
    });
  }
  
  _drawOrigin() 
  {
    console.log('GameScene: _drawOrigin called');
    const origin = this.add.graphics();
    origin.lineStyle(1, 0xff5555, 1);
    origin.strokeLineShape(new Phaser.Geom.Line(-10, 0, 10, 0));
    origin.strokeLineShape(new Phaser.Geom.Line(0, -10, 0, 10));
    this.world.add(origin);
    console.log('GameScene: Origin crosshair added');
  }
  
  _clearWorld() 
  {
    console.log('GameScene: _clearWorld called');
    if (this._sprite30Timer) {
      try { this._sprite30Timer.remove(false); } catch (e) { /* ignore */ }
      this._sprite30Timer = null;
    }
    this._frame22Active = false;
    // invalidate cached world children that will be destroyed
    this._ballSprite = null;
    this.world.removeAll(true);
    this._drawOrigin();
    console.log('GameScene: World cleared and origin redrawn');
  }
  
  _rebuildFrame17() 
  {
    console.log('GameScene: _rebuildFrame17 called');
    this._clearWorld();
    
    // Root 6
    console.log('GameScene: Frame 17 - Adding sprite 6');
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);
    
    // Sprite 8 / 7
    console.log('GameScene: Frame 17 - Adding sprite 8/7');
    const inst8 = this.add.container(20, 317);
    inst8.add(this.add.image(0, 0, 'shape7').setOrigin(0,0));
    this.world.add(inst8);
    
    // Sprite 14 (clickable: startGame)
    console.log('GameScene: Frame 17 - Adding sprite 14');
    const beforeCount = this.world.length;
    this._addSprite14(2656/20, 2342/20);
    const s14 = this.world.getAt(this.world.length - 1);
    if (s14 && s14.name === 'sprite14') {
      s14.setInteractive(new Phaser.Geom.Rectangle(-300, -300, 600, 600), Phaser.Geom.Rectangle.Contains);
      s14.on('pointerdown', () => {
        console.log('GameScene: sprite14 pressed -> startGame');
        this._playSoundIndex(0);
        if (this.gGame) this.gGame.startGame();
      });
    }
    
    // Sprite 16 / 15
    console.log('GameScene: Frame 17 - Adding sprite 16/15');
    const cont16 = this.add.container(5640/20, 3600/20);
    cont16.setScale(0.7385254, 0.6587219);
    if (this.textures.exists('shape15')) {
      console.log('GameScene: Frame 17 - Shape 15 exists, adding');
      cont16.add(this.add.image(0,0,'shape15').setOrigin(0,0));
    } else {
      console.warn('GameScene: Frame 17 - Shape 15 NOT found!');
    }
    this.world.add(cont16);
    
    // Sprite 18 / 17
    console.log('GameScene: Frame 17 - Adding sprite 18/17');
    const cont18 = this.add.container(6040/20, 7258/20);
    cont18.setScale(0.21221924, 0.1986084);
    if (this.textures.exists('shape17')) {
      console.log('GameScene: Frame 17 - Shape 17 exists, adding');
      cont18.add(this.add.image(0,0,'shape17').setOrigin(0,0));
    } else {
      console.warn('GameScene: Frame 17 - Shape 17 NOT found!');
    }
    this.world.add(cont18);
    
    // Edit texts (intro prompt)
    console.log('GameScene: Frame 17 - Adding edit texts');
    const fontFamily2 = 'UseTheSchwarz, UseTheSchwarz, sans-serif';
    const DPR2 = Math.max(1, window.devicePixelRatio || 1);
    const cx = (-40 + 9499) / 2 / 20;
    const cy = (-40 + 1647) / 2 / 20;
    // chid25 (black overlay) under
    const cont25 = this.add.container(300/20, 300/20);
    const tfBlack = this.add.text(cx, cy, "Fancy a game? 250 Neopoints and you're in!\nClick the board to play...", { fontFamily: fontFamily2, fontSize: '20px', color: '#000000', align: 'center', resolution: DPR2 }).setOrigin(0.5,0.5);
    cont25.add(tfBlack);
    this.world.add(cont25);
    // chid26 (white overlay) over
    const cont26 = this.add.container(240/20, 240/20);
    const tfWhite = this.add.text(cx, cy, "Fancy a game? 250 Neopoints and you're in!\nClick the board to play...", { fontFamily: fontFamily2, fontSize: '20px', color: '#ffffff', align: 'center', resolution: DPR2 }).setOrigin(0.5,0.5);
    cont26.add(tfWhite);
    this.world.add(cont26);

    console.log('GameScene: Frame 17 rebuild complete');
  }
  
  _addSprite14(tx, ty) 
  {
    console.log('GameScene: _addSprite14 called with tx:', tx, 'ty:', ty);
    const a = 0.3996277, b = 0.015380859, c = -0.018173218, d = 0.3380432;
    const scaleX = Math.sqrt(a*a + b*b);
    const scaleY = Math.sqrt(c*c + d*d);
    const rotation = Math.atan2(b, a);
    const s14 = this.add.container(tx, ty);
    s14.setScale(scaleX, scaleY);
    s14.setRotation(rotation);
    
    console.log('GameScene: Adding shape 9 to sprite 14');
    s14.add(this.add.image(-297/20, -394/20, 'shape9').setOrigin(0,0));
    
    console.log('GameScene: Adding shape 10 to sprite 14');
    const shp10 = this.add.image(0,0,'shape10').setOrigin(0,0);
    shp10.setPosition((-3700/20) + (3073/20), (-486/20) + (-1/20));
    shp10.setAlpha(205/256);
    s14.add(shp10);
    
    console.log('GameScene: Adding shape 11 to sprite 14');
    s14.add(this.add.image(-1492/20, -2542/20, 'shape11').setOrigin(0,0));
    
    console.log('GameScene: Adding sprite 13 to sprite 14');
    const s13 = this.add.container(4582/20, -7626/20); s13.setName('ball'); s13.setVisible(false); s13.add(this.add.image(-20, -17.5, 'shape12').setOrigin(0,0).setName('ballImage'));
    s14.add(s13);
    // make interactive only when flagged later
    s14.setName('sprite14');
    this.world.add(s14);
    console.log('GameScene: Sprite 14 added to world');
  }

  _addSprite14AtMatrix(a, b, c, d, tx, ty)
  {
    console.log('GameScene: _addSprite14AtMatrix called', { a, b, c, d, tx, ty });
    const scaleX = Math.sqrt(a*a + b*b);
    const scaleY = Math.sqrt(c*c + d*d);
    const rotation = Math.atan2(b, a);
    const s14 = this.add.container(tx, ty);
    s14.setScale(scaleX, scaleY);
    s14.setRotation(rotation);
    // children, same as _addSprite14
    s14.add(this.add.image(-297/20, -394/20, 'shape9').setOrigin(0,0));
    const shp10 = this.add.image(0,0,'shape10').setOrigin(0,0);
    shp10.setPosition((-3700/20) + (3073/20), (-486/20) + (-1/20));
    shp10.setAlpha(205/256);
    s14.add(shp10);
    s14.add(this.add.image(-1492/20, -2542/20, 'shape11').setOrigin(0,0));
    const s13 = this.add.container(4582/20, -7626/20); s13.setName('ball'); s13.setVisible(false); s13.add(this.add.image(-20, -17.5, 'shape12').setOrigin(0,0).setName('ballImage'));
    s14.add(s13);
    s14.setName('sprite14');
    this.world.add(s14);
  }

  _buildUI()
  {
    this.ui = this.add.container(0,0);
    const bg = this.add.graphics();
    bg.fillStyle(0x202020, 0.8);
    const width = 160, height = 520;
    bg.fillRect(0, 0, width, height);
    this.ui.add(bg);
    this._uiBounds = { x: 10, y: 100, width, height };

    const makeBtn = (y, label, handler) => {
      const txt = this.add.text(10, y, label, { fontFamily: 'monospace', fontSize: '14px', color: '#ffffff' });
      txt.setInteractive({ useHandCursor: true });
      txt.on('pointerdown', handler);
      this.ui.add(txt);
      return txt;
    };
    let y = 10;
    const add = (name, cb) => { makeBtn(y, name, cb); y += 24; };
    add('Frame 17', () => this._rebuildFrame17());
    add('Frame 18', () => this._buildFrame18());
    add('Frame 19', () => this._buildFrame19());
    add('Frame 20', () => this._buildFrame20());
    add('Frame 21', () => this._buildFrame21());
    add('Frame 22', () => this._buildFrame22());
    add('Frame 23', () => this._buildFrame23());
    add('Frame 24', () => this._buildFrame24());
    add('Frame 25', () => this._buildFrame25());
    add('Frame 26', () => this._buildFrame26());
    add('Frame 27', () => this._buildFrame27());
    add('Frame 28', () => this._buildFrame28());
    add('Frame 29', () => this._buildFrame29());
    add('Frame 30', () => this._buildFrame30());
    add('Frame 31', () => this._buildFrame31());
    add('Frame 32', () => this._buildFrame32());
    add('Frame 33', () => this._buildFrame33());
    add('Frame 34', () => this._buildFrame34());
    add('Frame 35', () => this._buildFrame35());
    add('Frame 36', () => this._buildFrame36());
    add('Frame 37', () => this._buildFrame37());
    add('Frame 38', () => this._buildFrame38());
    add('Frame 39', () => this._buildFrame39());
    add('Frame 40', () => this._buildFrame40());
    add('Frame 41', () => this._buildFrame41());
    add('Frame 42', () => this._buildFrame42());
    add('Frame 43', () => this._buildFrame43());
    add('Frame 44', () => this._buildFrame44());
    add('Frame 45', () => this._buildFrame45());
    add('Frame 46', () => this._buildFrame46());
    add('Frame 47', () => this._buildFrame47());
    add('Frame 48', () => this._buildFrame48());
    add('Frame 49', () => this._buildFrame49());
    add('Frame 50', () => this._buildFrame50());
    add('Frame 51', () => this._buildFrame51());
    add('Frame 52', () => this._buildFrame52());
    add('Frame 53', () => this._buildFrame53());
    add('Frame 54', () => this._buildFrame54());
    add('Frame 55', () => this._buildFrame55());
    add('Frame 56', () => this._buildFrame56());
    add('Frame 57', () => this._buildFrame57());
    add('Frame 58', () => this._buildFrame58());
    add('Frame 59', () => this._buildFrame59());
    add('Frame 60', () => this._buildFrame60());
    y += 8;
    add('Play 17-37', () => this._playSequence([17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]));
    const loopBtn = makeBtn(y += 24, 'Loop 22-27', () => {
      if (this._looping) {
        console.log('GameScene: Stopping loop 22-27');
        this._looping = false;
        loopBtn.setText('Loop 22-27');
      } else {
        console.log('GameScene: Starting loop 22-27');
        this._looping = true;
        loopBtn.setText('Stop Loop 22-27');
        this._playLoop([22,23,24,25,26,27]);
      }
    });

    // FPS slider
    y += 16;
    const sliderLabel = this.add.text(10, y, `FPS: ${this.playFps}`, { fontFamily: 'monospace', fontSize: '14px', color: '#ffffff' });
    this.ui.add(sliderLabel);
    y += 18;
    const trackX = 10, trackY = y, trackW = 120, trackH = 6;
    const track = this.add.graphics();
    track.fillStyle(0x555555, 1);
    track.fillRect(trackX, trackY, trackW, trackH);
    this.ui.add(track);

    const fpsToX = (fps) => trackX + ((Phaser.Math.Clamp(fps, 1, 60) - 1) / 59) * trackW;
    const xToFps = (x) => 1 + Math.round(59 * Phaser.Math.Clamp((x - trackX) / trackW, 0, 1));
    const knob = this.add.rectangle(fpsToX(this.playFps), trackY + trackH/2, 12, 12, 0xffffff).setOrigin(0.5, 0.5);
    knob.setInteractive({ draggable: true, useHandCursor: true });
    this.input.setDraggable(knob);
    knob.on('drag', (pointer, dragX, dragY) => {
      const localX = Phaser.Math.Clamp(dragX - this.ui.x, trackX, trackX + trackW);
      knob.x = localX;
      this.playFps = xToFps(localX);
      sliderLabel.setText(`FPS: ${this.playFps}`);
      // If sprite30 is animating, retime its timer to the new FPS
      if (this._sprite30Timer && this._sprite30Advance) {
        try { this._sprite30Timer.remove(false); } catch (e) {}
        this._sprite30Timer = this.time.addEvent({ delay: Math.round(1000/Math.max(1, this.playFps)), loop: true, callback: this._sprite30Advance });
      }
      // Retime main game loop timer
      if (this._gameTimer) {
        try { this._gameTimer.remove(false); } catch(e) {}
        this._gameTimer = this.time.addEvent({ delay: Math.round(1000/Math.max(1, this.playFps)), loop: true, callback: () => this.gGame && this.gGame.mainLoop() });
      }
    });
    this.ui.add(knob);
    this._layoutUI();
  }

  _layoutUI()
  {
    if (!this.ui) return; // no UI panel in gameplay build
    const { width, height } = this.scale.gameSize;
    this.ui.setPosition(10, 100);
    if (this._uiBounds) { this._uiBounds.x = 10; this._uiBounds.y = 100; }
  }

    _playSequence(seq, onComplete)
  {
    let i = 0;
    const step = () => {
      if (i >= seq.length) { if (typeof onComplete === 'function') onComplete(); return; }
      const f = seq[i++];
      switch (f) {
        case 18: this._buildFrame18(); break;
        case 19: this._buildFrame19(); break;
        case 20: this._buildFrame20(); break;
        case 21: this._buildFrame21(); break;
        case 23: this._buildFrame23(); break;
        case 24: this._buildFrame24(); break;
        case 25: this._buildFrame25(); break;
        case 26: this._buildFrame26(); break;
        case 17: this._rebuildFrame17(); break;
        case 22: this._buildFrame22(); break;
        case 27: this._buildFrame27(); break;
        case 28: this._buildFrame28(); break;
        case 29: this._buildFrame29(); break;
        case 30: this._buildFrame30(); break;
        case 31: this._buildFrame31(); break;
        case 32: this._buildFrame32(); break;
        case 33: this._buildFrame33(); break;
        case 34: this._buildFrame34(); break;
        case 35: this._buildFrame35(); break;
        case 36: this._buildFrame36(); break;
        case 37: this._buildFrame37(); break;
      }
      const fps = this.playFps || 12;
      const delayMs = Math.max(1, Math.round(1000 / fps));
      this.time.delayedCall(delayMs, step);
    };
    step();

  }
  _playLoop(seq)
  {
    if (!Array.isArray(seq) || seq.length === 0) return;
    let i = 0;
    const step = () => {
      if (!this._looping) return;
      if (i >= seq.length) i = 0;
      const f = seq[i++];
      switch (f) {
        case 17: this._rebuildFrame17(); break;
        case 18: this._buildFrame18(); break;
        case 19: this._buildFrame19(); break;
        case 20: this._buildFrame20(); break;
        case 21: this._buildFrame21(); break;
        case 22: this._buildFrame22(); break;
        case 23: this._buildFrame23(); break;
        case 24: this._buildFrame24(); break;
        case 25: this._buildFrame25(); break;
        case 26: this._buildFrame26(); break;
        case 27: this._buildFrame27(); break;
        case 28: this._buildFrame28(); break;
        case 29: this._buildFrame29(); break;
        case 30: this._buildFrame30(); break;
        case 31: this._buildFrame31(); break;
        case 32: this._buildFrame32(); break;
        case 33: this._buildFrame33(); break;
        case 34: this._buildFrame34(); break;
        case 35: this._buildFrame35(); break;
        case 36: this._buildFrame36(); break;
        case 37: this._buildFrame37(); break;
      }
      const fps = this.playFps || 12;
      const delayMs = Math.max(1, Math.round(1000 / fps));
      this.time.delayedCall(delayMs, step);
    };
    step();
  }
  
  _buildFrame22() 
  {
    console.log('GameScene: _buildFrame22 called');
    this._clearWorld();
    
    // depth 1: 6 persists
    console.log('GameScene: Frame 22 - Adding sprite 6');
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);
    
    // depth 4: shape 27 at its bounds origin (Xmin=400,Ymin=6340 twips)
    console.log('GameScene: Frame 22 - Checking for shape 27');
    if (this.textures.exists('shape27')) {
      console.log('GameScene: Frame 22 - Shape 27 exists, adding at position', 400/20, 6340/20);
      const bg27 = this.add.image(400/20, 6340/20, 'shape27').setOrigin(0,0);
      this.world.add(bg27);
      console.log('GameScene: Frame 22 - Shape 27 added successfully');
    } else {
      console.error('GameScene: Frame 22 - Shape 27 texture NOT found!');
    }
    
    // depth 5: sprite 14 (same matrix, ratio update ignored visually)
    console.log('GameScene: Frame 22 - Adding sprite 14');
    this._addSprite14(2656/20, 2342/20);
    
    // depth 63: sprite 29 at (5370,3600) twips with scale (0.7373657, 0.65870667); child 28 at (0,0)
    console.log('GameScene: Frame 22 - Adding sprite 29 with shape 28');
    {
      const cont29 = this.add.container(5370/20, 3600/20);
      cont29.setScale(0.7373657, 0.65870667);
      if (this.textures.exists('shape28')) {
        console.log('GameScene: Frame 22 - Shape 28 exists, adding to sprite 29');
        cont29.add(this.add.image(0, 0, 'shape28').setOrigin(0, 0));
        console.log('GameScene: Frame 22 - Shape 28 added successfully');
      } else {
        console.error('GameScene: Frame 22 - Shape 28 texture NOT found!');
      }
      this.world.add(cont29);
    }
    
    // depth 65: sprite 30 at (5769,5225) twips
    console.log('GameScene: Frame 22 - Adding sprite 30');
    this._addSprite30(5769/20, 5225/20);
    this._frame22Active = true;
    
    // depth 83/84: edit texts 31/32 in same positions
    console.log('GameScene: Frame 22 - Adding edit texts');
    const fontFamily3 = 'UseTheSchwarz, UseTheSchwarz, sans-serif';
    const DPR3 = Math.max(1, window.devicePixelRatio || 1);
    // Center text inside its EditText rect and overlay (black under, white over)
    const cxWait = (-40 + 9499) / 2 / 20;
    const cyWait = (-40 + 1647) / 2 / 20;
    const contWaitBlack = this.add.container(300/20, 300/20);
    const contWaitWhite = this.add.container(240/20, 240/20);
    this._tfWaitBlack = this.add.text(cxWait, cyWait, ' ', { fontFamily: fontFamily3, fontSize: '20px', color: '#000000', align: 'center', resolution: DPR3 }).setOrigin(0.5,0.5);
    this._tfWaitWhite = this.add.text(cxWait, cyWait, ' ', { fontFamily: fontFamily3, fontSize: '20px', color: '#ffffff', align: 'center', resolution: DPR3 }).setOrigin(0.5,0.5);
    contWaitBlack.add(this._tfWaitBlack);
    contWaitWhite.add(this._tfWaitWhite);
    this.world.add(contWaitBlack); this.world.add(contWaitWhite);
    // Apply AS2 DoAction wait text if available
    this._applyWaitTexts();
    
    console.log('GameScene: Frame 22 build complete');
  }
  
  _addSprite30(tx, ty) 
  {
    console.log('GameScene: _addSprite30 called with tx:', tx, 'ty:', ty);
    // Chid30 placement on root at (tx,ty). Inside, depth 1 is chid18 with constant scale,
    // and per-frame translation offsets per chid30.txt (twips).
    const cont30 = this.add.container(tx, ty);
    this.world.add(cont30);
    const child18 = this.add.container(0, 0);
    child18.setScale(0.21221924, 0.1986084);
    
    // chid18 contains shape 17 at (0,0)
    if (this.textures.exists('shape17')) {
      console.log('GameScene: Sprite 30 - Shape 17 exists, adding');
      child18.add(this.add.image(0,0,'shape17').setOrigin(0,0));
    } else {
      console.error('GameScene: Sprite 30 - Shape 17 texture NOT found!');
    }
    cont30.add(child18);
    
    // Per-frame offsets (twips): frame 1..10; frame 11 removes instance
    const frames = [
      { x: 0, y: 0 },
      { x: -60, y: -642 },
      { x: -120, y: -1284 },
      { x: -180, y: -1927 },
      { x: -240, y: -2569 },
      { x: -300, y: -3211 },
      { x: -360, y: -3853 },
      { x: -420, y: -4496 },
      { x: -480, y: -5138 },
      { x: -540, y: -5780 },
    ];
    let idx = 0;
    const advance = () => {
      if (!child18.active || !cont30.active) return;
      if (idx < frames.length) {
        const f = frames[idx++];
        child18.setPosition(f.x/20, f.y/20);
      } else {
        child18.setVisible(false);
        if (this._sprite30Timer) { try { this._sprite30Timer.remove(false); } catch (e) {} }
        this._sprite30Timer = null;
      }
    };
    // start timer that advances at ~12 fps
    this._sprite30Advance = advance;
    if (this._sprite30Timer) { try { this._sprite30Timer.remove(false); } catch (e) {} }
    const spriteFps = this.playFps || 32;
    this._sprite30Timer = this.time.addEvent({ delay: Math.round(1000/Math.max(1, spriteFps)), loop: true, callback: advance });
    advance();
  }
  
  _buildFrame27() 
  {
    console.log('GameScene: _buildFrame27 called');
    // Frame 27 label "zoom": removes d5,d65,d83,d84; adds d4=33; preserves others from frame 22 (e.g., d1=6, d63=29)
    this._clearWorld();
    
    console.log('GameScene: Frame 27 - Adding sprite 6');
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);

    // depth 4: shape 33 replacement (replaces shape 27 from frame 22)
    console.log('GameScene: Frame 27 - Checking for shape 33');
    if (this.textures.exists('shape33')) {
      const finalX = (4486 - 4086)/20;
      const finalY = (8044 - 1704)/20;
      const img = this.add.image(finalX, finalY, 'shape33').setOrigin(0,0);
      this.world.add(img);
    } else {
      console.error('GameScene: Frame 27 - Shape 33 texture NOT found!');
    }

    // depth 34: preserved from frame 17 -> sprite 14 (same matrix as frame 17)
    console.log('GameScene: Frame 27 - Preserving sprite 14 at depth 34');
    this._addSprite14(2656/20, 2342/20);

    // depth 63: preserved from frame 22 -> sprite 29 containing shape 28
    console.log('GameScene: Frame 27 - Preserving sprite 29 with shape 28');
    {
      const cont29 = this.add.container(5370/20, 3600/20);
      cont29.setScale(0.7373657, 0.65870667);
      if (this.textures.exists('shape28')) {
        cont29.add(this.add.image(0, 0, 'shape28').setOrigin(0, 0));
      } else {
        console.error('GameScene: Frame 27 - Shape 28 texture NOT found!');
      }
      this.world.add(cont29);
    }

    // depth 79: preserved from frame 17 -> shape 19 at (0,0) with bounds min (-250,-250) px
    console.log('GameScene: Frame 27 - Preserving shape 19 at depth 79');
    if (this.textures.exists('shape19')) {
      const img19 = this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0);
      this.world.add(img19);
    } else {
      console.warn('GameScene: Frame 27 - Shape 19 texture NOT found!');
    }

    // depth 80: preserved from frame 17 -> sprite 23 at (3501,-1440) twips
    console.log('GameScene: Frame 27 - Preserving sprite 23 at depth 80');
    {
      const cont23 = this.add.container(3501/20, -1440/20);
      // Visual placeholder if texture exists
      if (this.textures.exists('sprite23')) {
        cont23.add(this.add.image(0, 0, 'sprite23').setOrigin(0,0));
      }
      this.world.add(cont23);
    }
    
    console.log('GameScene: Frame 27 build complete');
  }

  _buildFrame28()
  {
    console.log('GameScene: _buildFrame28 called');
    // Frame 28: moves d4 (chid33), d34 (chid14), d63 (chid29); others persist from 27
    this._clearWorld();

    // d1: chid6 persists
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);

    // d4: chid33 moved+scaled ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â apply scale on a container at (tx,ty), image at (xmin,ymin)
    console.log('GameScene: Frame 28 - Updating shape 33 at depth 4');
    if (this.textures.exists('shape33')) {
      const cont4 = this.add.container(4502/20, 8611/20);
      cont4.setScale(1.0781097, 1.0781097);
      cont4.add(this.add.image(-4086/20, -1704/20, 'shape33').setOrigin(0,0));
      this.world.add(cont4);
    } else {
      console.error('GameScene: Frame 28 - Shape 33 texture NOT found!');
    }

    // d34: chid14 moved with new matrix
    console.log('GameScene: Frame 28 - Updating sprite 14 at depth 34');
    this._addSprite14AtMatrix(0.44960022, 0.016067505, -0.02079773, 0.39474487, 2474/20, 2091/20);

    // d63: chid29 moved to tx=5886,ty=3600; scale unchanged
    console.log('GameScene: Frame 28 - Updating sprite 29 at depth 63');
    {
      const cont29 = this.add.container(5886/20, 3600/20);
      cont29.setScale(0.7373657, 0.65870667);
      if (this.textures.exists('shape28')) {
        cont29.add(this.add.image(0, 0, 'shape28').setOrigin(0, 0));
      } else {
        console.error('GameScene: Frame 28 - Shape 28 texture NOT found!');
      }
      this.world.add(cont29);
    }

    // d79,d80: persist from frame 27
    if (this.textures.exists('shape19')) {
      this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    }
    {
      const cont23 = this.add.container(3501/20, -1440/20);
      if (this.textures.exists('sprite23')) {
        cont23.add(this.add.image(0, 0, 'sprite23').setOrigin(0,0));
      }
      this.world.add(cont23);
    }

    console.log('GameScene: Frame 28 build complete');
  }

  _buildFrame29()
  {
    console.log('GameScene: _buildFrame29 called');
    // Frame 29: moves d4 (chid33), d34 (chid14), d63 (chid29); others persist from 28
    this._clearWorld();

    // d1: chid6 persists
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);

    // d4: chid33 moved+scaled to tx=4517,ty=9178, scale=1.1562195
    console.log('GameScene: Frame 29 - Updating shape 33 at depth 4');
    if (this.textures.exists('shape33')) {
      const cont4 = this.add.container(4517/20, 9178/20);
      cont4.setScale(1.1562195, 1.1562195);
      cont4.add(this.add.image(-4086/20, -1704/20, 'shape33').setOrigin(0,0));
      this.world.add(cont4);
    } else {
      console.error('GameScene: Frame 29 - Shape 33 texture NOT found!');
    }

    // d34: chid14 moved with new matrix
    console.log('GameScene: Frame 29 - Updating sprite 14 at depth 34');
    this._addSprite14AtMatrix(0.49954224, 0.017807007, -0.023788452, 0.4514923, 2293/20, 1833/20);

    // d63: chid29 moved to tx=6401,ty=3600; scale unchanged
    console.log('GameScene: Frame 29 - Updating sprite 29 at depth 63');
    {
      const cont29 = this.add.container(6401/20, 3600/20);
      cont29.setScale(0.7373657, 0.65870667);
      if (this.textures.exists('shape28')) {
        cont29.add(this.add.image(0, 0, 'shape28').setOrigin(0, 0));
      } else {
        console.error('GameScene: Frame 29 - Shape 28 texture NOT found!');
      }
      this.world.add(cont29);
    }

    // d79,d80: persist from previous frame
    if (this.textures.exists('shape19')) {
      this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    }
    {
      const cont23 = this.add.container(3501/20, -1440/20);
      if (this.textures.exists('sprite23')) {
        cont23.add(this.add.image(0, 0, 'sprite23').setOrigin(0,0));
      }
      this.world.add(cont23);
    }

    console.log('GameScene: Frame 29 build complete');
  }

  _buildFrame30()
  {
    console.log('GameScene: _buildFrame30 called');
    // Frame 30: moves d4 (chid33), d34 (chid14), d63 (chid29)
    this._clearWorld();

    // d1: chid6 persists
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);

    // d4: chid33 moved+scaled to tx=4533,ty=9745, scale=1.234314
    console.log('GameScene: Frame 30 - Updating shape 33 at depth 4');
    if (this.textures.exists('shape33')) {
      const cont4 = this.add.container(4533/20, 9745/20);
      cont4.setScale(1.234314, 1.234314);
      cont4.add(this.add.image(-4086/20, -1704/20, 'shape33').setOrigin(0,0));
      this.world.add(cont4);
    } else {
      console.error('GameScene: Frame 30 - Shape 33 texture NOT found!');
    }

    // d34: chid14 moved with new matrix
    console.log('GameScene: Frame 30 - Updating sprite 14 at depth 34');
    this._addSprite14AtMatrix(0.5494995, 0.019546509, -0.026763916, 0.50823975, 2113/20, 1577/20);

    // d63: chid29 moved to tx=6917,ty=3600; scale unchanged
    console.log('GameScene: Frame 30 - Updating sprite 29 at depth 63');
    {
      const cont29 = this.add.container(6917/20, 3600/20);
      cont29.setScale(0.7373657, 0.65870667);
      if (this.textures.exists('shape28')) {
        cont29.add(this.add.image(0, 0, 'shape28').setOrigin(0, 0));
      } else {
        console.error('GameScene: Frame 30 - Shape 28 texture NOT found!');
      }
      this.world.add(cont29);
    }

    // d79,d80: persist
    if (this.textures.exists('shape19')) {
      this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    }
    {
      const cont23 = this.add.container(3501/20, -1440/20);
      if (this.textures.exists('sprite23')) {
        cont23.add(this.add.image(0, 0, 'sprite23').setOrigin(0,0));
      }
      this.world.add(cont23);
    }

    console.log('GameScene: Frame 30 build complete');
  }

  // Frames 18ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ21 repeat frame 17
  _buildFrame18() { this._rebuildFrame17(); }
  _buildFrame19() { this._rebuildFrame17(); }
  _buildFrame20() { this._rebuildFrame17(); }
  _buildFrame21() { this._rebuildFrame17(); }

  // Frames 23ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ26 hold frame 22 state to let sprite 30 animate without reset
  _buildFrame23() { this._holdFrame22(); }
  _buildFrame24() { this._holdFrame22(); }
  _buildFrame25() { this._holdFrame22(); }
  _buildFrame26() { this._holdFrame22(); }

  _holdFrame22()
  {
    if (this._frame22Active) {
      console.log('GameScene: Holding frame 22 visuals (no rebuild)');
      return;
    }
    console.log('GameScene: Frame 22 not active; building it to start hold');
    this._buildFrame22();
  }

  _buildFrame31()
  {
    console.log('GameScene: _buildFrame31 called');
    this._clearWorld();
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);
    // d4: shape33 scaled at container
    if (this.textures.exists('shape33')) {
      const cont4 = this.add.container(4549/20, 10312/20);
      cont4.setScale(1.3124237);
      cont4.add(this.add.image(-4086/20, -1704/20, 'shape33').setOrigin(0,0));
      this.world.add(cont4);
    }
    // d34: sprite14 matrix
    this._addSprite14AtMatrix(0.59947205, 0.021270752, -0.029724121, 0.56495667, 1933/20, 1320/20);
    // d63: sprite29
    {
      const cont29 = this.add.container(7432/20, 3600/20);
      cont29.setScale(0.7373657, 0.65870667);
      if (this.textures.exists('shape28')) cont29.add(this.add.image(0,0,'shape28').setOrigin(0,0));
      this.world.add(cont29);
    }
    // d79, d80
    if (this.textures.exists('shape19')) this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    { const cont23 = this.add.container(3501/20, -1440/20); if (this.textures.exists('sprite23')) cont23.add(this.add.image(0,0,'sprite23').setOrigin(0,0)); this.world.add(cont23); }
    console.log('GameScene: Frame 31 build complete');
  }

  _buildFrame32()
  {
    console.log('GameScene: _buildFrame32 called');
    this._clearWorld();
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);
    // d4
    if (this.textures.exists('shape33')) {
      const cont4 = this.add.container(4564/20, 10879/20);
      cont4.setScale(1.3905487);
      cont4.add(this.add.image(-4086/20, -1704/20, 'shape33').setOrigin(0,0));
      this.world.add(cont4);
    }
    // d34
    this._addSprite14AtMatrix(0.64941406, 0.022979736, -0.032684326, 0.62171936, 1751/20, 1061/20);
    // d63
    { const cont29 = this.add.container(7948/20, 3600/20); cont29.setScale(0.7373657, 0.65870667); if (this.textures.exists('shape28')) cont29.add(this.add.image(0,0,'shape28').setOrigin(0,0)); this.world.add(cont29); }
    // d79,d80
    if (this.textures.exists('shape19')) this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    { const cont23 = this.add.container(3501/20, -1440/20); if (this.textures.exists('sprite23')) cont23.add(this.add.image(0,0,'sprite23').setOrigin(0,0)); this.world.add(cont23); }
    console.log('GameScene: Frame 32 build complete');
  }

  _buildFrame33()
  {
    console.log('GameScene: _buildFrame33 called');
    this._clearWorld();
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);
    if (this.textures.exists('shape33')) {
      const cont4 = this.add.container(4580/20, 11446/20);
      cont4.setScale(1.4686584);
      cont4.add(this.add.image(-4086/20, -1704/20, 'shape33').setOrigin(0,0));
      this.world.add(cont4);
    }
    this._addSprite14AtMatrix(0.6993866, 0.02468872, -0.035629272, 0.6784363, 1572/20, 803/20);
    { const cont29 = this.add.container(8463/20, 3600/20); cont29.setScale(0.7373657, 0.65870667); if (this.textures.exists('shape28')) cont29.add(this.add.image(0,0,'shape28').setOrigin(0,0)); this.world.add(cont29); }
    if (this.textures.exists('shape19')) this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    { const cont23 = this.add.container(3501/20, -1440/20); if (this.textures.exists('sprite23')) cont23.add(this.add.image(0,0,'sprite23').setOrigin(0,0)); this.world.add(cont23); }
    console.log('GameScene: Frame 33 build complete');
  }

  _buildFrame34()
  {
    console.log('GameScene: _buildFrame34 called');
    this._clearWorld();
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);
    if (this.textures.exists('shape33')) {
      const cont4 = this.add.container(4596/20, 12013/20);
      cont4.setScale(1.5467529);
      cont4.add(this.add.image(-4086/20, -1704/20, 'shape33').setOrigin(0,0));
      this.world.add(cont4);
    }
    this._addSprite14AtMatrix(0.7493286, 0.026382446, -0.038589478, 0.7351837, 1392/20, 545/20);
    { const cont29 = this.add.container(8979/20, 3600/20); cont29.setScale(0.7373657, 0.65870667); if (this.textures.exists('shape28')) cont29.add(this.add.image(0,0,'shape28').setOrigin(0,0)); this.world.add(cont29); }
    if (this.textures.exists('shape19')) this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    { const cont23 = this.add.container(3501/20, -1440/20); if (this.textures.exists('sprite23')) cont23.add(this.add.image(0,0,'sprite23').setOrigin(0,0)); this.world.add(cont23); }
    console.log('GameScene: Frame 34 build complete');
  }

  _buildFrame35()
  {
    console.log('GameScene: _buildFrame35 called');
    this._clearWorld();
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);
    if (this.textures.exists('shape33')) {
      const cont4 = this.add.container(4611/20, 12580/20);
      cont4.setScale(1.6248627);
      cont4.add(this.add.image(-4086/20, -1704/20, 'shape33').setOrigin(0,0));
      this.world.add(cont4);
    }
    this._addSprite14AtMatrix(0.79930115, 0.028060913, -0.041534424, 0.79193115, 1212/20, 288/20);
    { const cont29 = this.add.container(9494/20, 3600/20); cont29.setScale(0.7373657, 0.65870667); if (this.textures.exists('shape28')) cont29.add(this.add.image(0,0,'shape28').setOrigin(0,0)); this.world.add(cont29); }
    if (this.textures.exists('shape19')) this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    { const cont23 = this.add.container(3501/20, -1440/20); if (this.textures.exists('sprite23')) cont23.add(this.add.image(0,0,'sprite23').setOrigin(0,0)); this.world.add(cont23); }
    console.log('GameScene: Frame 35 build complete');
  }

  _buildFrame36()
  {
    console.log('GameScene: _buildFrame36 called');
    this._clearWorld();
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);
    // d4: now chid34 at origin
    if (this.textures.exists('shape34')) {
      const img = this.add.image(-2672/20, 10040/20, 'shape34').setOrigin(0,0);
      this.world.add(img);
    } else {
      console.error('GameScene: Frame 36 - Shape 34 texture NOT found!');
    }
    // d34 new matrix
    this._addSprite14AtMatrix(0.8493347, 0.030059814, -0.04449463, 0.8488159, 1031/20, 28/20);
    // d63
    { const cont29 = this.add.container(10010/20, 3600/20); cont29.setScale(0.7373657, 0.65870667); if (this.textures.exists('shape28')) cont29.add(this.add.image(0,0,'shape28').setOrigin(0,0)); this.world.add(cont29); }
    // d79,d80 persist
    if (this.textures.exists('shape19')) this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    { const cont23 = this.add.container(3501/20, -1440/20); if (this.textures.exists('sprite23')) cont23.add(this.add.image(0,0,'sprite23').setOrigin(0,0)); this.world.add(cont23); }
    console.log('GameScene: Frame 36 build complete');
  }

  _buildFrame37()
  {
    console.log('GameScene: _buildFrame37 called');
    // Frame 37: label 'play'; Remove d4 and d63 and d34, then place chid14 at d34 with name 'game' and ratio 36
    this._clearWorld();

    // d1 persists
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);

    // d4 removed; nothing placed

    // d34 re-placed: sprite 14 with same matrix as frame 36 (ratio/name do not affect visuals here)
    console.log('GameScene: Frame 37 - Placing sprite 14 at depth 34 (name=game)');
    this._addSprite14AtMatrix(0.8493347, 0.030059814, -0.04449463, 0.8488159, 1031/20, 28/20);

    // d63 removed; do not place sprite 29

    // d79,d80 persist
    if (this.textures.exists('shape19')) this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    { const cont23 = this.add.container(3501/20, -1440/20); if (this.textures.exists('sprite23')) cont23.add(this.add.image(0,0,'sprite23').setOrigin(0,0)); this.world.add(cont23); }

    // AS2 DoAction: dropTheBall(); stop();
    if (this.gGame) this.gGame.dropTheBall();

    console.log('GameScene: Frame 37 build complete');
  }

  // Frames 38ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ50 repeat frame 37
  _buildFrame38() { this._buildFrame37(); }
  _buildFrame39() { this._buildFrame37(); }
  _buildFrame40() { this._buildFrame37(); }
  _buildFrame41() { this._buildFrame37(); }
  _buildFrame42() { this._buildFrame37(); }
  _buildFrame43() { this._buildFrame37(); }
  _buildFrame44() { this._buildFrame37(); }
  _buildFrame45() { this._buildFrame37(); }
  _buildFrame46() { this._buildFrame37(); }
  _buildFrame47() { this._buildFrame37(); }
  _buildFrame48() { this._buildFrame37(); }
  _buildFrame49() { this._buildFrame37(); }
  _buildFrame50() { this._buildFrame37(); }

  _buildFrame51()
  {
    console.log('GameScene: _buildFrame51 called');
    // Frame 51: label 'gameover'. Adds results texts at d63-66, play button at d67,
    // sprite29 (scaled) at d75, sprite18 (scaled) at d77. Persist base and board.
    this._clearWorld();

    // d1: base background (shape6)
    const inst6 = this.add.container(0, 0);
    inst6.add(this.add.image(-22.6, -29.45, 'shape6').setOrigin(0,0));
    this.world.add(inst6);

    // d34: keep board sprite 14 as seen in frames 36-37
    this._addSprite14AtMatrix(0.8493347, 0.030059814, -0.04449463, 0.8488159, 1031/20, 28/20);

    // d63/d64: result2b/result2 (black/white layered texts) centered like EditText 31/32
    {
      const fontFamily = 'UseTheSchwarz, UseTheSchwarz, sans-serif';
      const DPR = Math.max(1, window.devicePixelRatio || 1);
      const styleBlack = { fontFamily, fontSize: '20px', color: '#000000', align: 'center', wordWrap: { width: 420 }, resolution: DPR };
      const styleWhite = { fontFamily, fontSize: '20px', color: '#ffffff', align: 'center', wordWrap: { width: 420 }, resolution: DPR };
      // Use same EditText rect center as wait texts
      const cx = (-40 + 9499) / 2 / 20; // ~236.5 px
      const xBlack = 300/20 + cx; // black underlay offset
      const xWhite = 240/20 + cx; // white overlay offset
      const yWhite = 3220/20; // from SWF
      const yBlack = 3280/20; // from SWF
      this._tResult2b = this.add.text(xBlack, yBlack, ' ', styleBlack).setOrigin(0.5,0.5);
      this._tResult2 = this.add.text(xWhite, yWhite, ' ', styleWhite).setOrigin(0.5,0.5);
      this.world.add(this._tResult2b); this.world.add(this._tResult2);
    }

    // d65/d66: result1b/result1 (black/white layered texts) centered
    {
      const fontFamily = 'UseTheSchwarz, UseTheSchwarz, sans-serif';
      const DPR = Math.max(1, window.devicePixelRatio || 1);
      const styleBlack = { fontFamily, fontSize: '20px', color: '#000000', align: 'center', wordWrap: { width: 420 }, resolution: DPR };
      const styleWhite = { fontFamily, fontSize: '20px', color: '#ffffff', align: 'center', wordWrap: { width: 420 }, resolution: DPR };
      const cx = (-40 + 9499) / 2 / 20;
      const xBlack = 300/20 + cx;
      const xWhite = 240/20 + cx;
      const yWhite = 1040/20;
      const yBlack = 1100/20;
      this._tResult1b = this.add.text(xBlack, yBlack, ' ', styleBlack).setOrigin(0.5,0.5);
      this._tResult1 = this.add.text(xWhite, yWhite, ' ', styleWhite).setOrigin(0.5,0.5);
      this.world.add(this._tResult1b); this.world.add(this._tResult1);
    }

    // d67: DefineSprite 43 (composite) at (2880,6840)
    {
      const cont43 = this.add.container(2880/20, 6840/20);
      // chid40 inside cont43
      const cont40 = this.add.container(-319/20, -240/20);
      cont40.setScale(0.9962158, 0.99583435);
      let bgHit = null;
      if (this.textures.exists('shape39')) {
        const bgImg = this.add.image(-1/20, 0, 'shape39').setOrigin(0,0);
        cont40.add(bgImg);
        bgHit = {
          x: cont40.x + bgImg.x * cont40.scaleX,
          y: cont40.y + bgImg.y * cont40.scaleY,
          w: bgImg.displayWidth * cont40.scaleX,
          h: bgImg.displayHeight * cont40.scaleY
        };
      } else {
        const g = this.add.graphics();
        g.fillStyle(0x333333, 1).fillRoundedRect(-50, -12, 264, 60, 6);
        cont40.add(g);
        bgHit = {
          x: cont40.x + (-50) * cont40.scaleX,
          y: cont40.y + (-12) * cont40.scaleY,
          w: 264 * cont40.scaleX,
          h: 60 * cont40.scaleY
        };
      }
      cont43.add(cont40);
      // chid41 (tfield2 black) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â center within its rect: (-40, -40) to (3720, 549) twips
      {
        const fontFamily = 'Use the Schwarz, UseTheSchwarz, sans-serif';
        const c41 = this.add.container(420/20, 160/20);
        const cx = ( -40 + 3720 ) / 2 / 20; // 1840 twips -> 92 px
        const cy = ( -40 + 549 ) / 2 / 20;  // 254.5 twips -> ~12.7 px
        const tf2 = this.add.text(cx, cy, 'Play again', { fontFamily, fontSize: '20px', color: '#000000', align: 'center' }).setOrigin(0.5,0.5);
        c41.setScale(1.0, 0.99812317);
        c41.add(tf2);
        cont43.add(c41);
      }
      // chid42 (tfield colored) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â same centering
      {
        const fontFamily = 'Use the Schwarz, UseTheSchwarz, sans-serif';
        const c42 = this.add.container(360/20, 100/20);
        const cx = ( -40 + 3720 ) / 2 / 20;
        const cy = ( -40 + 549 ) / 2 / 20;
        const tf = this.add.text(cx, cy, 'Play again', { fontFamily, fontSize: '20px', color: '#66cc99', align: 'center' }).setOrigin(0.5,0.5);
        c42.setScale(1.0, 0.99812317);
        c42.add(tf);
        cont43.add(c42);
      }
      cont43.setName('playbut');
      // Build interactive rect from background geometry in cont43 local space
      if (bgHit) {
        const rect = new Phaser.Geom.Rectangle(bgHit.x, bgHit.y, bgHit.w, bgHit.h);
        cont43.setInteractive(rect, Phaser.Geom.Rectangle.Contains);
        cont43.input && (cont43.input.cursor = 'pointer');
        console.log('GameScene: Frame 51 - playbut hit rect', rect);
      } else {
        // Fallback generous rect centered at local origin
        cont43.setInteractive(new Phaser.Geom.Rectangle(-100, -50, 200, 100), Phaser.Geom.Rectangle.Contains);
        cont43.input && (cont43.input.cursor = 'pointer');
        console.log('GameScene: Frame 51 - playbut fallback hit rect');
      }
      cont43.input && (cont43.input.cursor = 'pointer');
      cont43.on('pointerdown', () => {
        console.log('GameScene: Play button pressed - HANDLER CALLED');
        this._playSoundIndex(0);
        if (this.gGame) {
          console.log('Calling playAgain on gGame');
          this.gGame.playAgain();
          // Immediately show wait overlay for responsiveness; mainLoop will re-drive the flow
          this._gotoAndStop('wait');
        } else {
          console.log('ERROR: gGame is null!');
        }
      });
      this.world.add(cont43);
      console.log('GameScene: Frame 51 - playbut created and interactive');
      this._playButton = cont43;
    }

    // d75: DefineSprite 29 (contains shape28), scaled and translated
    {
      const cont29 = this.add.container(-2906/20, 4005/20);
      cont29.setScale(1.3069916, 1.3069763);
      if (this.textures.exists('shape28')) cont29.add(this.add.image(0,0,'shape28').setOrigin(0,0));
      this.world.add(cont29);
    }

    // d77: DefineSprite 18 (contains shape17), scaled and translated
    {
      const cont18 = this.add.container(5768/20, 9140/20);
      cont18.setScale(0.35375977, 0.35409546);
      if (this.textures.exists('shape17')) cont18.add(this.add.image(0,0,'shape17').setOrigin(0,0));
      this.world.add(cont18);
    }

    // Optional persists (if present earlier)
    if (this.textures.exists('shape19')) this.world.add(this.add.image(-5000/20, -5000/20, 'shape19').setOrigin(0,0));
    { const cont23 = this.add.container(3501/20, -1440/20); if (this.textures.exists('sprite23')) cont23.add(this.add.image(0,0,'sprite23').setOrigin(0,0)); this.world.add(cont23); }

    // Apply results text from logic
    this._applyResultTexts();
    if (this._playButton) { this.world.bringToTop(this._playButton); }
    console.log('GameScene: Frame 51 build complete');
  }

  // Frames 52ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ60 repeat frame 51
  _buildFrame52() { this._buildFrame51(); }
  _buildFrame53() { this._buildFrame51(); }
  _buildFrame54() { this._buildFrame51(); }
  _buildFrame55() { this._buildFrame51(); }
  _buildFrame56() { this._buildFrame51(); }
  _buildFrame57() { this._buildFrame51(); }
  _buildFrame58() { this._buildFrame51(); }
  _buildFrame59() { this._buildFrame51(); }
  _buildFrame60() { this._buildFrame51(); }
  
  _resize() 
  {
    const { width, height } = this.scale.gameSize;
    console.log('GameScene: _resize called - viewport size:', width, 'x', height);
    const sx = width / VW, sy = height / VH; 
    // In embed mode allow manual scale for precise cropping
    let s;
    if (this.embedMode) {
      s = (this._embedScale && this._embedScale > 0) ? this._embedScale : 1; // default 1: no zoom, crop viewport
    } else {
      s = Math.min(sx, sy);
    }
    const baseOx = (width - VW * s) / 2; 
    const baseOy = (height - VH * s) / 2;
    const crop = this._embedCrop || { x: 0, y: 0 };
    const ox = baseOx + (this.embedMode ? crop.x : 0);
    const oy = baseOy + (this.embedMode ? crop.y : 0);
    console.log('GameScene: Scale factors - sx:', sx, 'sy:', sy, 'final scale:', s);
    console.log('GameScene: Offset - ox:', ox, 'oy:', oy);
    this.world.setScale(s).setPosition(ox, oy);
    // Store stage transform (Flash stage -> screen)
    this._stageScale = s;
    this._stageOffset = { x: ox, y: oy };
    console.log('GameScene: World scaled and positioned');
  }

  // ---------- Embed Crop Overlay (debug) ----------
  _initCropOverlay()
  {
    if (this._cropOverlayActive) return; // already on
    this._cropOverlayActive = true;
    const { width, height } = this.scale.gameSize;
    const labelStyle = { fontFamily: 'monospace', fontSize: '12px', color: '#00ff88' };
    const helpStyle = { fontFamily: 'monospace', fontSize: '11px', color: '#cccccc' };
    this._cropG = this.add.graphics();
    this._cropG.lineStyle(1, 0x00ff88, 0.9).strokeRect(0.5, 0.5, width-1, height-1);
    this._cropLabel = this.add.text(8, 8, '', labelStyle).setScrollFactor(0).setDepth(10000);
    this._cropHelp = this.add.text(8, 24, 'Drag to pan. Q/E=scale, C=log, R=reset', helpStyle).setScrollFactor(0).setDepth(10000);
    this._updateCropLabel();
    // Draggable zone across entire viewport
    const zone = this.add.zone(0, 0, width, height).setOrigin(0,0);
    zone.setInteractive({ draggable: true, useHandCursor: true });
    this.input.setDraggable(zone);
    this._cropZone = zone;
    let lastX = 0, lastY = 0;
    zone.on('dragstart', (pointer) => { lastX = pointer.x; lastY = pointer.y; });
    zone.on('drag', (pointer) => {
      const dx = pointer.x - lastX;
      const dy = pointer.y - lastY;
      lastX = pointer.x; lastY = pointer.y;
      this._embedCrop.x += dx;
      this._embedCrop.y += dy;
      this._resize();
      this._updateCropLabel();
    });
    // Keys: C log, R reset, Arrows fine adjust, Q/E scale
    this._cropKeyC = () => {
      console.log('[EmbedCrop] cropx=', this._embedCrop.x, 'cropy=', this._embedCrop.y, 'cropscale=', this._embedScale ?? 1);
    };
    this.input.keyboard.on('keydown-C', this._cropKeyC);
    this._cropKeyR = () => {
      this._embedCrop.x = 0; this._embedCrop.y = 0; this._embedScale = 1; this._resize(); this._updateCropLabel();
    };
    this.input.keyboard.on('keydown-R', this._cropKeyR);
    const nudge = (dx, dy) => { this._embedCrop.x += dx; this._embedCrop.y += dy; this._resize(); this._updateCropLabel(); };
    this._cropKeyUp = () => nudge(0, -1);
    this._cropKeyDown = () => nudge(0, 1);
    this._cropKeyLeft = () => nudge(-1, 0);
    this._cropKeyRight = () => nudge(1, 0);
    this.input.keyboard.on('keydown-UP', this._cropKeyUp);
    this.input.keyboard.on('keydown-DOWN', this._cropKeyDown);
    this.input.keyboard.on('keydown-LEFT', this._cropKeyLeft);
    this.input.keyboard.on('keydown-RIGHT', this._cropKeyRight);
    const rescale = (ds) => { this._embedScale = Math.max(0.1, (this._embedScale ?? 1) + ds); this._resize(); this._updateCropLabel(); };
    this._cropKeyQ = () => rescale(-0.01);
    this._cropKeyE = () => rescale(0.01);
    this.input.keyboard.on('keydown-Q', this._cropKeyQ);
    this.input.keyboard.on('keydown-E', this._cropKeyE);
    // Mouse wheel to scale
    this._cropWheel = (pointer, currentlyOver, dx, dy) => { rescale(dy > 0 ? -0.01 : 0.01); };
    this.input.on('wheel', this._cropWheel);

    // Keep overlay matched to viewport size on resize
    this._cropResize = () => {
      const { width, height } = this.scale.gameSize;
      this._cropG.clear().lineStyle(1, 0x00ff88, 0.9).strokeRect(0.5, 0.5, width-1, height-1);
      zone.setSize(width, height);
    };
    this.scale.on('resize', this._cropResize);
  }
  _updateCropLabel() { if (this._cropLabel) this._cropLabel.setText(`crop: ${this._embedCrop.x}, ${this._embedCrop.y}  scale: ${ (this._embedScale ?? 1).toFixed(2) }`); }

  _destroyCropOverlay()
  {
    if (!this._cropOverlayActive) return;
    this._cropOverlayActive = false;
    try { this._cropG.destroy(); } catch(e) {}
    try { this._cropLabel.destroy(); } catch(e) {}
    try { this._cropHelp.destroy(); } catch(e) {}
    try { this._cropZone.destroy(); } catch(e) {}
    this._cropG = this._cropLabel = this._cropHelp = this._cropZone = null;
    // Remove listeners
    if (this._cropKeyC) this.input.keyboard.off('keydown-C', this._cropKeyC);
    if (this._cropKeyR) this.input.keyboard.off('keydown-R', this._cropKeyR);
    if (this._cropKeyUp) this.input.keyboard.off('keydown-UP', this._cropKeyUp);
    if (this._cropKeyDown) this.input.keyboard.off('keydown-DOWN', this._cropKeyDown);
    if (this._cropKeyLeft) this.input.keyboard.off('keydown-LEFT', this._cropKeyLeft);
    if (this._cropKeyRight) this.input.keyboard.off('keydown-RIGHT', this._cropKeyRight);
    if (this._cropKeyQ) this.input.keyboard.off('keydown-Q', this._cropKeyQ);
    if (this._cropKeyE) this.input.keyboard.off('keydown-E', this._cropKeyE);
    if (this._cropWheel) this.input.off('wheel', this._cropWheel);
    if (this._cropResize) this.scale.off('resize', this._cropResize);
    this._cropKeyC = this._cropKeyR = this._cropKeyUp = this._cropKeyDown = this._cropKeyLeft = this._cropKeyRight = this._cropKeyQ = this._cropKeyE = this._cropWheel = this._cropResize = null;
  }

  _toggleCropOverlay()
  {
    if (this._cropOverlayActive) {
      console.log('[EmbedCrop] overlay OFF');
      this._destroyCropOverlay();
    } else {
      console.log('[EmbedCrop] overlay ON');
      this._initCropOverlay();
    }
  }

  // ---------- AS2 Helpers on Scene ----------
  _initGameLogic()
  {
    this._ids = {
      IDS_intro_text: "Fancy a game? 250 Neopoints and you're in!\nClick the board to play...",
      IDS_wait_text: 'Off you go - please wait ...',
      IDS_you_won: 'You won',
      IDS_points: 'points',
      IDS_your_np: 'Your NP',
      IDS_won_item: 'Won item',
      IDS_server_error: 'Server error',
      IDS_play_again: 'Play again'
    };
    this.gGame = new GameLogic(this);
    if (this._gameTimer) { try { this._gameTimer.remove(false); } catch(e){} }
    const fps = this.playFps || 32;
    this._gameTimer = this.time.addEvent({ delay: Math.round(1000/Math.max(1,fps)), loop: true, callback: () => this.gGame.mainLoop() });
  }

  _gotoAndStop(label)
  {
    switch (label) {
      case 'wait': this._buildFrame22(); break;
      default: console.warn('gotoAndStop: unknown label', label);
    }
  }

  _gotoAndPlay(label)
  {
    switch (label) {
      case 'zoom': this._playSequence([27,28,29,30,31,32,33,34,35,36], () => this._buildFrame37()); break;
      case 'gameover': console.log('GameScene._gotoAndPlay: gameover -> build frame 51'); this._buildFrame51(); break;
      default: console.warn('gotoAndPlay: unknown label', label);
    }
  }

  _playSoundIndex(i)
  {
    const map = ['hit','throw','pow'];
    const key = map[Math.max(0, Math.min(map.length-1, i))];
    try { this.sound.play(key); } catch(e) { console.warn('Sound play failed', key, e); }
  }

  // Convert object position to Flash-stage coordinates (pre world scale/offset)
  _getFlashXY(obj)
  {
    const m = obj.getWorldTransformMatrix();
    const sx = m.tx, sy = m.ty;
    const s = this._stageScale || 1;
    const off = this._stageOffset || { x: 0, y: 0 };
    return { x: (sx - off.x) / s, y: (sy - off.y) / s };
  }

  // Set object position by desired Flash-stage coordinates
  _setFlashXY(obj, fx, fy)
  {
    const s = this._stageScale || 1;
    const off = this._stageOffset || { x: 0, y: 0 };
    const sx = off.x + s * fx;
    const sy = off.y + s * fy;
    const parent = obj.parentContainer || this.world;
    const pm = parent.getWorldTransformMatrix();
    const a = pm.a, b = pm.b, c = pm.c, d = pm.d, tx = pm.tx, ty = pm.ty;
    const det = a * d - b * c || 1e-6;
    const lx = ( d * (sx - tx) - c * (sy - ty) ) / det;
    const ly = ( -b * (sx - tx) + a * (sy - ty) ) / det;
    obj.setPosition(lx, ly);
  }

  _findSprite14()
  {
    for (const child of this.world.list) { if (child.name === 'sprite14') return child; }
    return null;
  }

  _findBall(sprite14)
  {
    if (!sprite14) return null;
    if (!this._ballSprite || !this._ballSprite.active || this._ballSprite.scene !== this) {
      console.log('GameScene._findBall: creating new ball sprite');
      this._ballSprite = this.add.image(0,0,'shape12').setOrigin(0.5,0.5).setVisible(false);
      this.world.add(this._ballSprite);
    } else if (!this._ballSprite.parentContainer) {
      // Reattach if it lost its parent due to world rebuild
      console.log('GameScene._findBall: re-adding existing ball sprite to world');
      this.world.add(this._ballSprite);
    }
    return this._ballSprite;
  }

  _applyWaitTexts()
  {
    const text = this._ids && this._ids.IDS_wait_text || ' ';
    if (this._tfWaitBlack) this._tfWaitBlack.setText(text);
    if (this._tfWaitWhite) this._tfWaitWhite.setText(text);
  }

  _applyResultTexts()
  {
    const r1raw = this.gGame ? this.gGame.showResult1 || ' ' : ' ';
    const r2raw = this.gGame ? this.gGame.showResult2 || ' ' : ' ';
    const r1 = this._sanitizeHtmlToText(r1raw);
    const r2 = this._sanitizeHtmlToText(r2raw);
    if (this._tResult1) this._tResult1.setText(r1);
    if (this._tResult1b) this._tResult1b.setText(r1);
    if (this._tResult2) this._tResult2.setText(r2);
    if (this._tResult2b) this._tResult2b.setText(r2);
  }
  _sanitizeHtmlToText(s)
  {
    if (!s || typeof s !== 'string') return '';
    let out = s.replace(/<br\s*\/>|<br\s*>/gi, '\n');
    out = out.replace(/<[^>]*>/g, '');
    out = out
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    return out;
  }
}

// ---------- AS2 Game Logic Port ----------
class GameLogic {
  constructor(scene) {
    this.scene = scene;
    // Constants and state
    this.st_wait = 1; this.st_call = 2; this.st_wait2 = 3; this.st_zoom = 4; this.st_wait3 = 5; this.st_drop = 6; this.st_game = 7; this.st_gameover = 8; this.st_gameover2 = 9;
    this.game_state = this.st_wait;
    this.game = null; this.ball = null;
    this.xmov = 0; this.ymov = 1; this.rotate = 0; this.grav = 1.1; this.yvel = 1;
    this.ySteps = 0; this.ymov = -4; this.ySteps = 1; // init bounce model
    while (this.ymov < 100) { this.yvel *= this.grav; this.ymov += this.yvel; this.ySteps += 1; }
    this.aTurns = [-1,-1,-1,-1];
    this.points = 0; this.totalnp = 0; this.prizeid = 0; this.winIndex = 0;
    this.aYEnd = [534,534,534,538,534,538,542,538,538,536,540,545,540,542,548,545];
    this.aXCenter = [16,46,76,112,143,171,206,242,274,302,330,366,401,426,462,502];
    this.lastHit = 0; this.aYHits = [88,188,288,388]; this.aXDist = [128,64,32,16]; this.aSteps = [25,20,16,12];
    this.timer = 0; this.drawSpeed = 10; // ms per tick
    this.showResult1 = ""; this.showResult2 = "";
  }
  startGame() {
    if (this.game_state === this.st_wait) this.game_state = this.st_call;
  }
  playAgain() {
    console.log('playAgain called, current state:', this.game_state, 'st_gameover:', this.st_gameover, 'st_gameover2:', this.st_gameover2);
    // Accept click from either gameover state to be robust
    if (this.game_state === this.st_gameover || this.game_state === this.st_gameover2) {
      console.log('Changing state to st_call');
      this.game_state = this.st_call;
    }
  }
  dropTheBall() { this.game_state = this.st_drop; }
  callScript() {
    // Real server request via userscript bridge (parent page) or direct fetch fallback
    const url = 'https://www.neopets.com/halloween/process_bagatelle.phtml?r=' + Math.floor(Math.random() * 99999);
    const handleResponse = (text) => {
      const data = {};
      String(text || '').split('&').forEach(kv => {
        const [k, v] = kv.split('=');
        if (!k) return;
        data[k] = decodeURIComponent((v || '').replace(/\+/g, ' '));
      });
      const points = parseInt(data.points || '0', 10) || 0;
      const totalnp = parseInt(data.totalnp || '0', 10) || 0;
      const prize_id = data.prize_id || '';
      const success = (data.success || '').toUpperCase();
      const error = data.error || '';
      this.showResult1 = error || this.showResult1 || '';
      console.log('GameLogic.callScript: server data', { success, points, totalnp, prize_id, error });
      this.dropBall(success, points, totalnp, prize_id);
    };
    const handleError = (err) => {
      console.warn('GameLogic.callScript: request failed, using error path', err);
      this.showResult1 = this.scene._ids && this.scene._ids.IDS_server_error || 'Server error';
      this.game_state = this.st_gameover; this.timer += 1000;
    };
    // If inside iframe, request parent to fetch to preserve session/cookies
    if (window.parent && window.parent !== window) {
      const id = Math.random().toString(36).slice(2);
      const onMsg = (e) => {
        const d = e.data || {};
        if (!d || d.type !== 'bagatelle:response' || d.id !== id) return;
        window.removeEventListener('message', onMsg);
        if (d.ok) handleResponse(d.text); else handleError(d.error || d.status);
      };
      window.addEventListener('message', onMsg);
      try {
        window.parent.postMessage({ type: 'bagatelle:request', id, url }, '*');
      } catch (e) { window.removeEventListener('message', onMsg); handleError(e); }
    } else {
      // Fallback: direct fetch (may fail due to CORS)
      fetch(url, { credentials: 'include', mode: 'cors' })
        .then(r => r.text())
        .then(handleResponse)
        .catch(handleError);
    }
  }
  setResultText() {
    let html = '<p align="center">';
    if (this.points > 0) html += `You won ${this.points} points`;
    html += `<br><br>Your NP ${this.totalnp}`;
    if (this.prizeid) html += `<br><br><u>Won item</u>`;
    html += '</p>';
    this.showResult2 = html;
  }
  dropBall(s, p, t, pid) {
    this.points = p; this.totalnp = t; this.prizeid = pid;
    let ok = true;
    
    // Fixed syntax - added braces
    if (Number(String(s).toUpperCase()) === 0) {
      ok = false;
    } else if (String(s).length !== 4) {
      ok = ok && true; // tolerate
    }
    
    if (!ok) {
      this.scene._helptext && (this.scene._helptext.text = 'Server error');
      this.game_state = this.st_gameover; 
      this.timer += 1000; 
      return;
    }
    
    this.aTurns = [];
    for (let i=0;i<4;i++) this.aTurns[i] = (s.substr(i,1) === 'L') ? -1 : 1;
    this.winIndex = (this.aTurns[0] === -1) ? 8 : 16;
    let div = 8;
    for (let i=1;i<4;i++) { if (this.aTurns[i] === -1) this.winIndex -= div/2; div /= 2; }
    this.winIndex -= 1;
    this.setResultText();
    console.log('GameLogic.dropBall: computed winIndex', this.winIndex, 'turns:', this.aTurns, 'points:', this.points, 'totalnp:', this.totalnp);
    this.game_state = this.st_zoom;
  }
  playSound(i) { this.scene._playSoundIndex(i); }
  mainLoop() {
    const now = this.scene.time.now;
    if (now < this.timer) return;
    this.timer = now + this.drawSpeed;
    switch (this.game_state) {
      case this.st_wait: break;
      case this.st_call:
        console.log('GameLogic.mainLoop: st_call -> wait & request');
        this.playSound(1);
        this.scene._gotoAndStop('wait');
        this.callScript();
        this.game_state = this.st_wait2;
        break;
      case this.st_wait2: break;
      case this.st_zoom:
        console.log('GameLogic.mainLoop: st_zoom -> play zoom sequence');
        this.scene._gotoAndPlay('zoom');
        this.game_state = this.st_wait3;
        break;
      case this.st_wait3: break;
      case this.st_drop:
        console.log('GameLogic.mainLoop: st_drop -> create/show ball');
        this.game = this.scene._findSprite14();
        this.ball = this.scene._findBall(this.game);
        if (this.ball) {
          this.ball.setVisible(true);
          this.ball.setRotation(0);
          this.scene._setFlashXY(this.ball, 256, -12);
        }
        this.xmov = 0; this.ymov = 5; this.yvel = 1; this.rotate = 0; this.lastHit = 0;
        this.game_state = this.st_game;
        break;
      case this.st_game:
        if (!this.moveBall()) { console.log('GameLogic.mainLoop: ball stopped -> st_gameover'); this.game_state = this.st_gameover; this.timer += 1000; }
        break;
      case this.st_gameover:
        if (this.ball) this.ball.setVisible(false);
        console.log('GameLogic.mainLoop: st_gameover -> build results');
        this.scene._gotoAndPlay('gameover');
        this.game_state = this.st_gameover2;
        break;
      case this.st_gameover2: break;
    }
  }
  moveBall() {
    if (!this.ball) return false;
    let moving = true;
    this.yvel *= this.grav;
    this.ymov += this.yvel;
    
    // Update ball position (Flash stage coords)
    const fp = this.scene._getFlashXY(this.ball);
    const newY = fp.y + this.ymov;
    this.scene._setFlashXY(this.ball, fp.x + this.xmov, newY);
    
    this.ball.rotation += Phaser.Math.DEG_TO_RAD * this.rotate;
    
    // Helper: convert between Flash stage <-> sprite14(local)
    const s = this.scene._stageScale || 1;
    const off = this.scene._stageOffset || { x: 0, y: 0 };
    const game = this.game;
    const pm = game ? game.getWorldTransformMatrix() : null;
    const toLocal = (fx, fy) => {
      if (!pm) return { x: fx, y: fy };
      const sx = off.x + s * fx, sy = off.y + s * fy;
      const a = pm.a, b = pm.b, c = pm.c, d = pm.d, tx = pm.tx, ty = pm.ty;
      const det = a * d - b * c || 1e-6;
      const lx = ( d * (sx - tx) - c * (sy - ty) ) / det;
      const ly = ( -b * (sx - tx) + a * (sy - ty) ) / det;
      return { x: lx, y: ly };
    };
    const localToFlash = (lx, ly) => {
      if (!pm) return { x: lx, y: ly };
      const a = pm.a, b = pm.b, c = pm.c, d = pm.d, tx = pm.tx, ty = pm.ty;
      const sx = a * lx + c * ly + tx;
      const sy = b * lx + d * ly + ty;
      const fx = (sx - off.x) / s;
      const fy = (sy - off.y) / s;
      return { x: fx, y: fy };
    };
    
    const flashPos = this.scene._getFlashXY(this.ball);
    const localPos = toLocal(flashPos.x, flashPos.y);
    const ly = localPos.y;
    const winX = this.aXCenter[this.winIndex];
    const targetY = this.aYEnd[this.winIndex];
    
    // AS2 parity: compare using sprite14 local coordinates
    if (ly >= targetY) {
      console.log('GameLogic.moveBall: reached bottom, ly:', ly, 'targetY:', targetY, 'winX:', winX);
      this.playSound(2);
      const fpt = localToFlash(winX, targetY);
      this.scene._setFlashXY(this.ball, fpt.x, fpt.y);
      moving = false;
    }
    else if (ly >= 480) {
      if (this.xmov !== 0) {
        const fpt = localToFlash(winX, ly);
        this.scene._setFlashXY(this.ball, fpt.x, fpt.y);
        this.xmov = 0;
      }
    } else {
      // Handle peg collisions by local Y thresholds
      let hitIndex = -1;
      let i = this.lastHit;
      while (i < this.aYHits.length) {
        if (ly >= this.aYHits[i]) {
          this.playSound(0);
          this.lastHit = i + 1;
          hitIndex = i;
          break;
        }
        i++;
      }
      if (hitIndex >= 0) {
        this.playSound(2);
        this.ymov = -4;
        this.yvel = 1;
        this.xmov = this.aXDist[hitIndex] / (this.ySteps / 2);
        this.xmov *= this.aTurns[hitIndex];
        this.rotate = (this.xmov > 0) ? (15 + hitIndex * 10) : -(15 + hitIndex * 10);
      }
    }
    return moving;
  }
  }

  // Add logging for Phaser game initialization
console.log('=== PHASER GAME INITIALIZATION ===');
const config = { 
  type: Phaser.AUTO, 
  parent: 'game', 
  backgroundColor: '#101010', 
  resolution: Math.max(1, window.devicePixelRatio || 1),
  render: { antialias: true, pixelArt: false, roundPixels: true },
  scale: { 
    mode: Phaser.Scale.RESIZE, 
    autoCenter: Phaser.Scale.CENTER_BOTH, 
    width: 960, 
    height: 640 
  }, 
  scene: [BootScene, LoadScene, GameScene] 
};

console.log('Game config:', config);
console.log('Creating Phaser.Game instance...');
const game = new Phaser.Game(config);

// Add global error handling
window.addEventListener('error', (e) => {
  console.error('Global JavaScript error:', e.error);
});

// Add additional texture checking
setTimeout(() => {
  console.log('=== TEXTURE AVAILABILITY CHECK ===');
  if (game.scene.scenes[2] && game.scene.scenes[2].textures) {
    const textures = game.scene.scenes[2].textures;
    console.log('Available textures:');
    ['shape6', 'shape7', 'shape9', 'shape10', 'shape11', 'shape12', 'shape15', 'shape17', 'shape19', 'shape27', 'shape28', 'shape33', 'shape34', 'shape39', 'sprite23'].forEach(key => {
      console.log(`  ${key}:`, textures.exists(key) ? 'EXISTS' : 'MISSING');
    });
  }
}, 2000);





