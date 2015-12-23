import { Sprite, Texture, Rectangle } from 'pixi.js';

import AnimationStore from "../../stores/AnimationStore.js";
import SKIN1 from './displacement_fish1.png';
import SKIN2 from './displacement_fish2.png';
import SKIN3 from './displacement_fish3.png';
import SKIN4 from './displacement_fish4.png';

let bounds;
let count = 0;
export default class Fish extends Sprite {
  constructor(i) {


    var fishId = i % 4;
    fishId += 1;
    let texture;
    switch (fishId) {
      case 1:
        texture = Texture.fromImage(SKIN1);
        break;
      case 2:
        texture = Texture.fromImage(SKIN2);
        break;
      case 3:
        texture = Texture.fromImage(SKIN3);
        break;
      case 4:
        texture = Texture.fromImage(SKIN4);
        break;
      default:
        texture = Texture.fromImage(SKIN1);
        break;
    }

    super(texture);


    let padding = 100;
    bounds = new Rectangle(-padding, -padding, 630 + padding * 2, 410 + padding * 2)

    this.anchor.x = this.anchor.y = 0.5;
    //var direction
    //var speed =
    this.direction = Math.random() * Math.PI * 2;
    this.speed = 2 + Math.random() * 2;
    this.turnSpeed = Math.random() - 0.8;

    this.position.x = Math.random() * bounds.width;
    this.position.y = Math.random() * bounds.height;
    //this.speed = new PIXI.Point(0,0)

    this.scale.x = this.scale.y = 0.8 + Math.random() * 0.3;

    AnimationStore.addChangeListener(this.animationHandler.bind(this));
  // this.animationHandler()
  }

  animationHandler() {
    count += 0.1;

    this.direction += this.turnSpeed * 0.01;
    this.position.x += Math.sin(this.direction) * this.speed;
    this.position.y += Math.cos(this.direction) * this.speed;

    this.rotation = -this.direction - Math.PI / 2;

    // wrap..

    if (this.position.x < bounds.x)
      this.position.x += bounds.width;
    if (this.position.x > bounds.x + bounds.width)
      this.position.x -= bounds.width

    if (this.position.y < bounds.y)
      this.position.y += bounds.height;
    if (this.position.y > bounds.y + bounds.height)
      this.position.y -= bounds.height

  }

}
