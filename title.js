class Title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    preload() {

        //AUDIO CACHE REQUIREMENT
        if(localStorage.getItem('moff') == "true") {
            musicoff = true
        } else {
            musicoff = false
        }
        this.load.path = "./assets/";
        this.load.image('title', 'title.png');
        this.load.audio("theme", "DoctorTimeTheme.mp3");
    }
    create() {

        this.sound.stopAll();
        this.theme = this.sound.add('theme');
        this.theme.play();
        this.theme.loop = true;

        this.cameras.main.setBackgroundColor('#1D4625');

        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        this.title = this.add.image(centerX, centerY - 100, 'title');
        this.title.setScale(3);

        const playText = this.add.text(centerX + 450, centerY + 300, 'PLAY', { fontSize: '80px', fill: '#fff' });
        //playText.setDepth(1);
        playText.setInteractive();
        playText.on('pointerover', () => {
            playText.setStyle({ fill: '#ff0' });
        });
        playText.on('pointerout', () => {
            playText.setStyle({ fill: '#fff' });
        });
        playText.on('pointerdown', () => {
            touchscreen = false;
            this.scene.start('map1');
        });
        this.tweens.add({
            targets: this.title,
            x: '+=' + 100,
            repeat: 2,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 100
        });

        const playTouch = this.add.text(centerX -360, centerY + 300, 'PLAY ON MOBILE', { fontSize: '80px', fill: '#fff' });
        //playText.setDepth(1);
        playTouch.setInteractive();
        playTouch.on('pointerover', () => {
            playTouch.setStyle({ fill: '#ff0' });
        });
        playTouch.on('pointerout', () => {
            playTouch.setStyle({ fill: '#fff' });
        });
        playTouch.on('pointerdown', () => {
            touchscreen = true;
            this.scene.start('map1');
        });
        this.tweens.add({
            targets: this.title,
            x: '+=' + 100,
            repeat: 2,
            yoyo: true,
            ease: 'Sine.inOut',
            duration: 100
        });

        const credText = this.add.text(centerX - 800, centerY + 300, 'CREDITS', { fontSize: '80px', fill: '#fff' });
        //playText.setDepth(1);
        credText.setInteractive();
        credText.on('pointerover', () => {
            credText.setStyle({ fill: '#ff0' });
        });
        credText.on('pointerout', () => {
            credText.setStyle({ fill: '#fff' });
        });
        credText.on('pointerdown', () => {
            this.scene.start('cred');
        });
        // const space = this.add.image(200, 0, 'space');
        // //space.scale(.5);
        // space.setOrigin(0);
        // space.setDepth(0);

        // this.imageObject.background = this.back;
    }
}