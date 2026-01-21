import { createScene } from './interacao3D.js';

const BABYLON = window.BABYLON;
const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true
});

window.engine = engine;
window.canvas = canvas;

const scene = createScene(engine, canvas, BABYLON, Assets);

engine.runRenderLoop(() => scene.render());
addEventListener('resize', () => engine.resize());
