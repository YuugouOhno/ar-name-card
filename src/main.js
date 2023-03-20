import "../style.css"

import { params1, params2, params3 } from "./setting-biont-params";
import { sizes } from "./setting-sizes"

import { camera, setCameraDirection } from "./three-camera";
import { aquarium, cameraTarget } from "./three-object";
import renderer from "./three-renderer";
import scene from "./three-scene";
import { directionalLight } from "./three-light";

import onWindowResize from "./onWindowResize";
import keyControls from "./keyControls";
import createBoids from "./createBoids";
import animate from "./animate";

function init() {
  // カメラの設定
  setCameraDirection();

  // レンダラーの設定
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);

  // シーンに追加
  scene.add(aquarium, cameraTarget, camera, directionalLight);

  // biontを作成
  // createBoids(params1);
  // createBoids(params2);
  createBoids(params3);

  // 画面リサイズの設定
  window.addEventListener("resize", onWindowResize)

  animate();
}

window.addEventListener("load", init);

keyControls();
