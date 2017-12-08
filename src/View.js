class View{

    constructor() {
        this.background = game.add.tileSprite(
            0, 0, window.innerWidth, window.innerHeight, constText.background.key
        );
        // this.help = game.add.sprite(100, 500, constText.boom.key);

        // this.help = game.add.sprite(1120, 850, constText.boomtext.key);

        this.scoreString = 'Score : ';
        this.scoreText = game.add.text(10, 10, this.scoreString + score , { font: '34px Open Sans', fill: '#fff' });

        this.explosions = game.add.group();
        this.explosions.createMultiple(30, constText.explode.key);
        this.explosions.forEach(invisibleExplosions, this);

        this.stateText = game.add.text(
        game.world.centerX, game.world.centerY, ' ', { font: '84px Open Sans', fill: '#39547f' });
        this.stateText.anchor.setTo(0.5, 0.5);
        this.stateText.visible = false;

    }
}

function invisibleExplosions(invader) {
    invader.anchor.x = 0.5;
    invader.anchor.y = 0.5;
    invader.animations.add(constText.explode.key);

}