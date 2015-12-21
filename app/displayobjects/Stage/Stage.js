import App from '../App/App.js';
import RendererStore from '../../stores/RendererStore.js';
import ScaledContainer from '../ScaledContainer/ScaledContainer.js';
import TEXTURE from "../../filters/WeveFilter/displacement_map.jpg";
import WeveFilter from "./../../filters/WeveFilter/weveFilter.js";
import { config } from '../../../package.json';

let displacementSprite;
export default class Stage extends ScaledContainer {
  constructor(...args) {
    super(...args);
    this.interactive = true;

    const cx = RendererStore.get('stageCenter').x;
    const cy = RendererStore.get('stageCenter').y;

    const app = new App(config.stageWidth, config.stageHeight);

    app.position.x = 0;
    app.position.y = 0;
    this.addChild(app);


    displacementSprite = new PIXI.Sprite.fromImage(TEXTURE);
    var weveFilter = new WeveFilter(displacementSprite);
    this.addChild(displacementSprite);
    app.filters = [weveFilter];
    app.interactive = true;
  }
}
