class Player{

    constructor() {
        this.player = game.add.sprite(400, 500, constText.ship.key);
        this.player.anchor.setTo(0.5, 0.5);
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        this.player.body.collideWorldBounds = true;
    }
    deathOfsomeone() {
        aliens.aliens.kill();
        player.player.kill();
        game.input.onTap.addOnce(function(){
        game.state.start('GameState', GameState);
        },this);
        view.stateText.text="GAME OVER\nCLICK TO RESTART";
        view.stateText.visible = true;
        score = 0;
        
    }
    fireBullet(){
        weapon.fire()
    }

}