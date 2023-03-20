import * as THREE from "three";

const normalMaterial_wire = new THREE.MeshNormalMaterial({
    wireframe: true,
});

const basicMaterial = new THREE.MeshBasicMaterial({
    color: "#000000"
});

const redPhysicalMaterial = new THREE.MeshPhysicalMaterial({
    color: "#ff0000",
    metalness: 0.865,
    roughness: 0.373,
    flatShading: true,
});

const bluePhysicalMaterial = new THREE.MeshPhysicalMaterial({
    color: "#0000ff",
    metalness: 0.865,
    roughness: 0.373,
    flatShading: true,
});

const purplePhysicalMaterial = new THREE.MeshPhysicalMaterial({
    color: "#4b0082",
    metalness: 0.865,
    roughness: 0.373,
    flatShading: true,
});

const yellowPhysicalMaterial = new THREE.MeshPhysicalMaterial({
    color: "#ffff00",
    metalness: 0.865,
    roughness: 0.373,
    flatShading: true,
});

export { normalMaterial_wire, basicMaterial, redPhysicalMaterial, bluePhysicalMaterial, purplePhysicalMaterial, yellowPhysicalMaterial };