import { cameraRot } from "./setting-camera";
import { activeRange } from "./setting-biont-params";
import { type_of_boids, now_type_of_boids, boids } from "./setting-boids";
import { params1, params2, params3 } from "./setting-biont-params";

import { fish, box } from "./three-object"
import scene from "./three-scene";
import { camera } from "./three-camera";
import { aquarium, cameraTarget } from "./three-object";
import renderer from "./three-renderer";

import createBoids from "./createBoids";

const keyControls = () => {
    document.addEventListener('keydown', keydown_ivent);
    document.addEventListener('keyup', keyup_ivent);
}

const keydown_ivent = (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            cameraRot.lr += 1;
            break;
        case 'ArrowRight':
            cameraRot.lr -= 1;
            break;
        case 'ArrowUp':
            cameraRot.ud += 2;
            break;
        case 'ArrowDown':
            cameraRot.ud -= 2;
            break;
        case 'Enter':
            cameraRot.cameraInTheAquarium = !cameraRot.cameraInTheAquarium
            if (cameraRot.cameraInTheAquarium) {
                camera.position.set(0, 0, 0);
                camera.lookAt(cameraTarget.position);
            } else {
                camera.position.set(0, activeRange * 1.2, activeRange * 1.2);
                camera.lookAt(aquarium.position);
            }
            break;
        case "1":
            now_type_of_boids[0] = type_of_boids.type_1;
            for (let i = 0; i < boids.length; i++) {
                // console.log(boids[i])
                scene.remove(boids[i].object);
            }
            boids.splice(0);
            // createBoids(params1);
            // createBoids(params2);
            createBoids(params3);
            break
        case "2":
            now_type_of_boids[0] = type_of_boids.type_2;
            for (let i = 0; i < boids.length; i++) {
                scene.remove(boids[i].object);
            }
            boids.splice(0);
            // createBoids(params1);
            // createBoids(params2);
            createBoids(params3);
            break
        case "3":
            now_type_of_boids[0] = type_of_boids.type_3;
            for (let i = 0; i < boids.length; i++) {
                scene.remove(boids[i].object);
            }
            boids.splice(0);
            // createBoids(params1);
            // createBoids(params2);
            createBoids(params3);
            break
        case "4":
            now_type_of_boids[0] = type_of_boids.type_4;
            for (let i = 0; i < boids.length; i++) {
                scene.remove(boids[i].object);
            }
            boids.splice(0);
            // createBoids(params1);
            // createBoids(params2);
            createBoids(params3);
            break
    }

    return false;
}

const keyup_ivent = () => {
    cameraRot.lr = 0;
    cameraRot.ud = 0;
    return false;
}

export default keyControls;