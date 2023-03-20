import Biont from "./Biont";
import { boids } from "./setting-boids";

const createBoids = (params) => {
    for (let i = 0; i < params.NUMBER; i++) {
        boids.push(
            new Biont((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, i, params)
            // new Biont(0, 0, 0, i, params)
        );
    }
}

export default createBoids;