import {
  Engine,
  Render,
  World,
  Bodies,
  Runner,
  Composite,
  Constraint,
  Collision,
  Composites,
} from "matter-js";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { DIMS } from "./constants";

const Simulation = () => {
  const scene = useRef();
  const engine = useRef(
    Engine.create({
      gravity: {
        scale: 0.001,
      },
    })
  );
  const runner = useRef(Runner.create());

  const [width, setWidth] = useState(0);
  const height = DIMS.HERO_HEIGHT;

  useLayoutEffect(() => {
    setWidth(scene.current.offsetWidth);
  }, []);

  useEffect(() => {
    const add = (body) => {
      World.add(engine.current.world, body);
    };

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        pixelRatio: window.devicePixelRatio,
        width: width,
        height: height,
        wireframes: false,
        showAngleIndicator: true,
        background: "transparent",
      },
    });

    // run the engine
    Runner.run(runner.current, engine.current);
    Render.run(render);

    // unmount
    return () => {
      // destroy Matter
      Render.stop(render);
      World.clear(engine.current.world);
      Engine.clear(engine.current);
      Runner.stop(runner.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, [height, width]);

  return (
    <div
      style={{
        height: DIMS.HERO_HEIGHT,
      }}
      className="container"
    >
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default Simulation;
