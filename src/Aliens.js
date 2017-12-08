class Aliens{

    constructor() {
        this.aliens = game.add.group();
        this.aliens.enableBody = true;
        this.aliens.physicsBodyType = Phaser.Physics.ARCADE;

        this.enemyBullets = game.add.group();
        this.enemyBullets.enableBody = true;
        this.enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.enemyBullets.createMultiple(30, 'enemyBullet');
        this.enemyBullets.setAll('anchor.x', 0.5);
        this.enemyBullets.setAll('anchor.y', 1);
        this.enemyBullets.setAll('outOfBoundsKill', true);
        this.enemyBullets.setAll('checkWorldBounds', true);
    }

    createAliens(posX, posY) {
        for (let y = 0; y <  posX * Math.random() / 2; y++)
        {
            for (let x = 0; x < posY * Math.random() * 2; x++)
            {
                let alien,
                invader = Math.floor(Math.random() * (2));

                if (invader === 0) {
                    alien = this.aliens.create(game.rnd.integerInRange(MIN_LEFT_POSITION_ALIENS, MAX_RIGHT_POSITION_ALIENS),  -50, constText.invader.key);
                }
                if (invader === 1){
                    alien = this.aliens.create(game.rnd.integerInRange(MIN_LEFT_POSITION_ALIENS, MAX_RIGHT_POSITION_ALIENS), -50, constText.invader2.key);
                }
                game.add.tween(alien).to( { y: window.innerHeight }, game.rnd.integerInRange(15000, 20000), Phaser.Easing.Linear.None, true, 0, 1000, false);
            }
        }
    }

}
