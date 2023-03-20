import { sizes } from "./setting-sizes";

import { camera } from "./three-camera";
import renderer from "./three-renderer";



const onWindowResize = () => {
    // サイズをアップデート
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // カメラをアップデート
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // レンダラーをアップデート
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);
};

export default onWindowResize;