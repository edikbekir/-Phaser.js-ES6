let constText,weaponRocket,weaponBazooka,player,weapon,view,reviseCollisionHandler,aliens,fireButton,cursors,help,visible,enemyBullets,dfg;
let game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'phaser-example',{enableDebug: false});

class GameState {
    constructor() {

    }
    preload() {
        game.load.image(constText.boom.key,constText.boom.url);
        game.load.image(constText.boomtext.key,constText.boomtext.url);        
        game.load.image(constText.background.key, constText.background.url);
        game.load.image(constText.bullet.key, constText.bullet.url);
        game.load.image(constText.bang.key, constText.bang.url);
        game.load.image(constText.bazooka.key, constText.bazooka.url);
        game.load.image(constText.invader.key, constText.invader.url);
        game.load.image(constText.invader2.key, constText.invader2.url);
        game.load.image(constText.ship.key, constText.ship.url);
        game.load.image(constText.explode.key, constText.explode.url);
    }
    create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        help = new Help();
        view = new View();
        weapon = new Weapons(constText.bullet.key);
        player = new Player(weapon);
        weaponRocket = new WeaponRocket();
        weaponBazooka = new WeaponBazooka(constText.bazooka.key);
        reviseCollisionHandler = new ReviseCollisionHandler();
        aliens = new Aliens();
        aliens.createAliens(posX,posY);
        cursors = game.input.keyboard.createCursorKeys();
        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
    }

    update() {
        view.background.tilePosition.y += SPEED_BACKGROUND;
        if (player.player.alive)
        {
            player.player.body.velocity.setTo(0, 0);
            if (cursors.left.isDown  )
            {
                player.player.body.velocity.x = -450;
            }
            if (cursors.right.isDown )
            {
                player.player.body.velocity.x = 450;
            }
            if (cursors.up.isDown)
            {
                player.player.body.velocity.y = -200;
            }
            if (cursors.down.isDown)
            {
                player.player.body.velocity.y = 450;
            }
            if (fireButton.isDown)
            {
                player.fireBullet();
            }
            aliens.aliens.forEach(function (item) {
                if(item.body.y >= window.innerHeight)
                    player.deathOfsomeone();       
            });

            view.scoreText.text = view.scoreString + score;
                  
            game.physics.arcade.overlap(player.player, aliens.aliens, player.deathOfsomeone, null, this);//касакие игрока с пришельцем
            game.physics.arcade.overlap(weapon.bullets, aliens.aliens,  reviseCollisionHandler.CollisionHandler, null, this);//касание пули пришельца 
            game.physics.arcade.overlap(player.player, weaponBazooka.bullets,weaponRocket.collisionHandlerWithRocketWeapon, null, this);//подбор базуки выстрел ракетой
            
            
        }
    }
    
}
class LoadJSON{
    preload(){
        game.load.json('constStrings', 'config.json');
    }
    create(){
        constText = game.cache.getJSON('constStrings');
        game.state.start('StartScript');
    }
}

class StartScript{
    preload(){
        game.load.script(constText.help.key, constText.help.url)
        game.load.script(constText.Constants.key, constText.Constants.url);
        game.load.script(constText.Variables.key, constText.Variables.url);        
        game.load.script(constText.Constants.key, constText.Constants.url);
        game.load.script(constText.view.key, constText.view.url);
        game.load.script(constText.player.key, constText.player.url);
        game.load.script(constText.weapons.key, constText.weapons.url);
        game.load.script(constText.reviseCollisionHandler.key, constText.reviseCollisionHandler.url);
        game.load.script(constText.Aliens.key, constText.Aliens.url);
    }
    create() {
        game.state.start('GameState');
    }
}

game.state.add('LoadJSON', LoadJSON);
game.state.add('StartScript', StartScript);
game.state.add('GameState', GameState);
game.state.start('LoadJSON');