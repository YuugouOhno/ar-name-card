import * as THREE from "three";

import { activeRange } from "./setting-biont-params";

const aquariumGeometry = new THREE.SphereGeometry(activeRange*1.1, 32, 16);
const cameraTargetGeometry = new THREE.SphereGeometry(0.00001, 32, 16);
const bodyGeometry = new THREE.OctahedronGeometry(5);
const tailGeometry = new THREE.CircleGeometry(10, 32, 0, (Math.PI * 70) / 180);
const boxGeometry = new THREE.BoxGeometry(5,5,15);
export { aquariumGeometry, cameraTargetGeometry, bodyGeometry, tailGeometry, boxGeometry };