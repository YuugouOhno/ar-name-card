import * as THREE from "three";

import canvas from "./setting-canvas";

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,

});

export default renderer;