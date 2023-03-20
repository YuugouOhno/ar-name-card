import { cameraRot } from "./setting-camera";
import { activeRange } from "./setting-biont-params";

import { cameraTarget } from "./three-object";
import { camera } from "./three-camera";
import renderer from "./three-renderer";
import { aquarium } from "./three-object";
import scene from "./three-scene";

import { boids } from "./setting-boids";

const animate = () => {
    window.requestAnimationFrame(animate);

    boids.forEach(biont => {
        biont.draw();
    });

    cameraRot.x += cameraRot.lr; // 毎フレーム角度を0.5度ずつ足していく
    cameraRot.y += cameraRot.ud;
    cameraRot.z += cameraRot.lr;

    if (cameraRot.y > 90) {
        cameraRot.y = 90;
    } else if (cameraRot.y < -90) {
        cameraRot.y = -90;
    }

    // // ラジアンに変換する
    const radian_x = (cameraRot.x * Math.PI) / 180;
    const radian_y = (cameraRot.y * Math.PI) / 180;
    const radian_z = (cameraRot.z * Math.PI) / 180;
    
    // // 角度に応じてカメラの位置を設定
    if (cameraRot.cameraInTheAquarium) {
        cameraTarget.position.x = activeRange * 1.4 * Math.sin(radian_x);
        cameraTarget.position.y = activeRange * 1.4 * Math.sin(radian_y);
        cameraTarget.position.z = activeRange * 1.4 * Math.cos(radian_z);
        camera.lookAt(cameraTarget.position);

    } else {
        camera.position.x = activeRange * 1.4 * Math.sin(radian_x);
        camera.position.y = activeRange * 1.4 * Math.sin(radian_y);
        camera.position.z = activeRange * 1.4 * Math.cos(radian_z);
        camera.lookAt(aquarium.position);
    }

    // Render
    renderer.render(scene, camera);
}

export default animate;