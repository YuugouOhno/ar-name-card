import * as THREE from "three";


import { aquariumGeometry, cameraTargetGeometry, bodyGeometry, tailGeometry, boxGeometry } from "./three-geometry";

import { normalMaterial_wire } from "./three-material";


const aquarium = new THREE.Mesh(aquariumGeometry, normalMaterial_wire);
const cameraTarget = new THREE.Mesh(cameraTargetGeometry, normalMaterial_wire);
const fish = (scale, material) => {
    const body = new THREE.Mesh(bodyGeometry, material);
    body.position.set(0, 0, 0);
    body.scale.set(1, 1.1, 2);

    const tail1 = new THREE.Mesh(tailGeometry, material);
    tail1.position.set(0, 0, -5);
    tail1.rotation.set(-35 * (Math.PI) / 180, (Math.PI) / 2, 0);
    tail1.height = 0.1;

    const tail2 = new THREE.Mesh(tailGeometry, material);
    tail2.position.set(0, 0, -5);
    tail2.rotation.set(-35 * (Math.PI) / 180, -(Math.PI) / 2, 0);
    tail2.height = 0.1;

    const object = new THREE.Group();
    object.add(body);
    object.add(tail1);
    object.add(tail2);

    object.scale.set(scale.x, scale.y, scale.z);

    return object
};
const box = (scale, material) => {
    const object = new THREE.Mesh(boxGeometry, material);
    object.scale.set(scale.x, scale.y, scale.z);

    return object
};
const text = () => {
    
};


export { aquarium, cameraTarget, fish, box, text };