/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';

class Hero extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'hero-run-sheet', 0);
    
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.anims.play('hero-running');

    this.body.setCollideWorldBounds(true);
    this.body.setSize(12, 40);
    this.body.setOffset(12, 23);
    this.body.setMaxVelocity(250, 400);
    this.body.setDragX(750);

    this.keys = scene.cursorKeys;
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    
    if (this.keys.left.isDown) {
      this.body.setAccelerationX(-1000);
      this.setFlipX(true);
      this.body.offset.x = 8;
    } else if (this.keys.right.isDown) {
      this.body.setAccelerationX(1000);
      this.setFlipX(false);
      this.body.offset.x = 12;
    } else {
      this.body.setAccelerationX(0);
    }
  }

}

export default Hero;