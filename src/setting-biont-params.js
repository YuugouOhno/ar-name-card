import * as THREE from "three";

import { redPhysicalMaterial, bluePhysicalMaterial, purplePhysicalMaterial, yellowPhysicalMaterial } from "./three-material";

const activeRange = 100;

const params1 = {
    TYPE: "red",
    SPEED: 0.6,
    MAX_SPEED: 2,
    CENTER_OF_BOIDS: new THREE.Vector3(0, 0, 0), //群れの中心
    ACTION_RANGE_OF_BOIDS: 100, //群れの行動範囲
    WEIGHT_TO_SEPARATION: 1, //条件1 分離
    WEIGHT_TO_ALIGNMENT: 0.001, //条件2 整列
    WEIGHT_TO_COHESION: 0.001, //条件3 凝集
    SEPARATION_RANGE: 20, // 分離する範囲
    COHESION_RANGE: 40, // 凝集する範囲
    WEIGHT_TO_CENTER: 1,
    MATERIAL: redPhysicalMaterial,
    SCALE: {x:1,y:0.3,z:0.7},
    NUMBER: 100,
}

const params2 = {
    TYPE: "blue",
    SPEED: 0.9,
    MAX_SPEED: 3,
    CENTER_OF_BOIDS: new THREE.Vector3(0, 0, 0), //群れの中心
    ACTION_RANGE_OF_BOIDS: 100, //群れの行動範囲
    WEIGHT_TO_SEPARATION: 0.9, //条件1 分離
    WEIGHT_TO_ALIGNMENT: 0.001, //条件2 整列
    WEIGHT_TO_COHESION: 0.0001, //条件3 凝集
    SEPARATION_RANGE: 10, // 分離する範囲
    COHESION_RANGE: 40, // 凝集する範囲
    WEIGHT_TO_CENTER: 0.001,
    MATERIAL: bluePhysicalMaterial,
    SCALE: {x:0.3,y:0.3,z:0.3},
    NUMBER: 100,
}

const params3 = {
    TYPE: "purple",
    SPEED: 0.9,
    MAX_SPEED: 2,
    CENTER_OF_BOIDS: new THREE.Vector3(0, 0, 0), //群れの中心
    ACTION_RANGE_OF_BOIDS: 100, //群れの行動範囲
    WEIGHT_TO_SEPARATION: 2, //条件1 分離
    WEIGHT_TO_ALIGNMENT: 0.001, //条件2 整列
    WEIGHT_TO_COHESION: 0.001, //条件3 凝集
    SEPARATION_RANGE: 10, // 分離する範囲
    COHESION_RANGE: 30, // 凝集する範囲
    WEIGHT_TO_CENTER: 0.001,
    MATERIAL: purplePhysicalMaterial,
    SCALE: {x:0.7,y:0.7,z:0.7},
    NUMBER: 400,
}

const params4 = {
    TYPE: "purple",
    SPEED: 0.9,
    MAX_SPEED: 2,
    CENTER_OF_BOIDS: new THREE.Vector3(0, 0, 0), //群れの中心
    ACTION_RANGE_OF_BOIDS: 100, //群れの行動範囲
    WEIGHT_TO_SEPARATION: 2, //条件1 分離
    WEIGHT_TO_ALIGNMENT: 0.001, //条件2 整列
    WEIGHT_TO_COHESION: 0.001, //条件3 凝集
    SEPARATION_RANGE: 10, // 分離する範囲
    COHESION_RANGE: 30, // 凝集する範囲
    WEIGHT_TO_CENTER: 0.001,
    MATERIAL: yellowPhysicalMaterial,
    SCALE: {x:0.7,y:0.7,z:0.7},
    NUMBER: 100,
}

export { activeRange, params1, params2, params3, params4 };