class ReviseCollisionHandler {

    CollisionHandler (bullet, alien) {

        random = game.rnd.integerInRange(-0.1, 1.1);
        alien.kill();
        bullet.kill();
        weapon = new Weapons(constText.bullet.key, constText.bullet.url);
        scoreBullets += 1;
        aliens.createAliens(posX, posY);
        
        if(scoreBullets%5){
            bullet.kill();
            if(random === 0){
             cordAlienX = alien.x;
             cordAlienY = alien.y;
             
             bullet.kill();
            }
            if(random === 1){
                cordAlienX = alien.x;
                cordAlienY = alien.y;
                weaponBazooka.create(constText.bazooka.key);
                bullet.kill();
            }
        }
        
        score +=SCORE_ALIENS;

        let explosion = view.explosions.getFirstExists(false);
        explosion.reset(alien.body.x, alien.body.y);
        explosion.play(constText.explode.key, 10, false, true);



    }

    

}