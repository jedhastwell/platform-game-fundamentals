/// <reference path="../../typings/phaser.d.ts" />
import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  init(data) {}

  preload() {
    this.load.spritesheet('hero-run-sheet', 'assets/hero/run.png', {
      frameWidth: 32,
      frameHeight: 64,
    });
  }

  create(data) {

    this.anims.create({
      key: 'hero-running',
      frames: this.anims.generateFrameNumbers('hero-run-sheet'),
      frameRate: 10,
      repeat: -1,
    });

    this.player = this.add.sprite(400, 300, 'hero-run-sheet');
    this.player.anims.play('hero-running');
  }

  update(time, delta) {}
}

export default Game;