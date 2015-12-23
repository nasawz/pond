import Background from '../Background/Background.js';
import Fish from "../Fish/Fish.js";
import Overlay from "../Overlay/overlay.js";
import RendererStore from '../../stores/RendererStore.js';
import ScaledContainer from '../ScaledContainer/ScaledContainer.js';
import TEXTURE from "../../filters/WeveFilter/displacement_map.jpg";
// import Bunny from '../Bunny/Bunny.js';
// import BUNNY from '../Bunny/bunny.png';
// import BunnyGroup from '../BunnyGroup/BunnyGroup.js';
/**
 * Main App Display Object
 *
 * Adds a background and some bunnies to it's self
 *
 * @exports App
 * @extends ScaledContainer
 */
export default class App extends ScaledContainer {

  constructor(...args) {
    super(...args);
    this.pivot.x = 0;
    this.pivot.y = 0;
    var bg = new Background();
    var overlay = new Overlay()
    this.addChild(bg);
    for (var i = 0; i < 10; i++) {
      let fish = new Fish(i);
      this.addChild(fish);
    }
    this.addChild(overlay);
  }

  addBunnies() {
    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;

    let group1 = new BunnyGroup();
    let b1 = new Bunny();

    b1.position.x = cx;
    b1.position.y = cy;

    group1.position.x = cx;
    group1.position.y = cy + (RendererStore.get('stageHeight') * .25);

    this.addChild(b1);
    this.addChild(group1);
  }

}
