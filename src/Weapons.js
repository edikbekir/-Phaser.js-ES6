class Weapons {
    constructor(name){
        this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.pzhysicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(30, name);
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 1);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);
    }

    create(name){
        this.bullets.create(cordAlienX, cordAlienY, name);

    }

    fire() {
        if (game.time.now > bulletTime) {
            let bullet = this.bullets.getFirstExists(false);

            if (bullet) {
                bullet.reset(player.player.x, player.player.y);
                bullet.body.velocity.y = BULLET_SPEED;
                bulletTime = game.time.now + 300;
            }
        }
    }

}

class WeaponRocket extends Weapons{
    constructor() {
        super(constText.bang.key);
    }

    collisionHandlerWithRocketWeapon(bullet, weaponRocket){
        scoreBullets = 1;
        weapon = new Weapons(constText.bang.key);
        weaponRocket.kill();
        weaponRocket.visible = false;
        
    }
}
class WeaponBazooka extends Weapons{
    
        constructor(){
    
            super(constText.bazooka.key);
    
        }
    }