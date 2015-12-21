/**
 * App.js
 *
 * The main entry point, appends PIXI to the DOM
 * and starts a render and animation loop
 *
 */

import './index.html';

import TWEEN from 'tween.js';

import AnimationStore from './stores/AnimationStore';
import Renderer from './Renderer/Renderer';
import Stage from "./displayobjects/Stage/Stage.js";
import { config } from '../package.json';

const renderer = new Renderer(config.stageWidth, config.stageHeight);
const stage = new Stage(config.stageWidth, config.stageHeight);

document.body.appendChild(renderer.view);

AnimationStore.addChangeListener(() => TWEEN.update());

renderer.addRenderable(stage);
renderer.start();
