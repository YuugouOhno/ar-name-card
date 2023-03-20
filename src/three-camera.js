import * as THREE from "three";

import { sizes } from "./setting-sizes";
import { cameraRot } from "./setting-camera";
import { activeRange } from "./setting-biont-params";

import { aquarium, cameraTarget } from "./three-object";


const camera = new THREE.PerspectiveCamera(
    110,
    sizes.width / sizes.height,
    0.1,
    1000
);

const setCameraDirection = () => {
    if (cameraRot.cameraInTheAquarium) {
        camera.position.set(0, 0, 0);
        camera.lookAt(cameraTarget.position);
    } else {
        camera.position.set(0, activeRange * 1.4, activeRange * 1.4);
        camera.lookAt(aquarium.position);
    }
}

export { camera, setCameraDirection };