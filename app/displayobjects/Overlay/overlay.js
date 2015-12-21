import PIXI from 'pixi.js';

import AnimationStore from "../../stores/AnimationStore.js";
import TEXTURE from './zeldaWaves.png';

/**
 * Loads the adds the diagnostic image
 *
 * @exports Background
 * @extends Container
 */

let count = 0;
let overlay;
export default class Overlay extends PIXI.Container {

  constructor() {
    super();

    overlay = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(TEXTURE), 630, 410);
    overlay.alpha = 0.1 //0.2
    this.addChild(overlay);

    AnimationStore.addChangeListener(this.animationHandler.bind(this));
  // this.animationHandler()
  }

  animationHandler() {
    count += 0.1;
    overlay.tilePosition.x = count * -10 //blurAmount * 40;
    overlay.tilePosition.y = count * -10
  }

}
