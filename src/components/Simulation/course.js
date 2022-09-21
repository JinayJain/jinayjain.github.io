import { Bodies } from "matter-js";

function getRectParams(x1, y1, x2, y2) {
  const xCenter = (x1 + x2) / 2;
  const yCenter = (y1 + y2) / 2;
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const angle = Math.atan2(y2 - y1, x2 - x1);

  return {
    x: xCenter,
    y: yCenter,
    width: distance,
    angle: angle,
  };
}

function buildRect(x1, y1, x2, y2, height, options) {
  const { x, y, angle, width } = getRectParams(x1, y1, x2, y2);
  return Bodies.rectangle(x, y, width, height, {
    angle,
    ...options,
  });
}

export function buildBoundaries(height, width) {
  const boundaryWidth = 20;
  const boundaryOptions = {
    isStatic: true,
    render: {
      fillStyle: "transparent",
      strokeStyle: "transparent",
    },
  };

  const left = Bodies.rectangle(
    -boundaryWidth / 2,
    height / 2,
    boundaryWidth,
    height,
    boundaryOptions
  );
  const right = Bodies.rectangle(
    width + boundaryWidth / 2,
    height / 2,
    boundaryWidth,
    height,
    boundaryOptions
  );
  const top = Bodies.rectangle(
    width / 2,
    -boundaryWidth / 2,
    width,
    boundaryWidth,
    boundaryOptions
  );
  const bottom = Bodies.rectangle(
    width / 2,
    height + boundaryWidth / 2,
    width,
    boundaryWidth,
    boundaryOptions
  );

  return [left, right, top, bottom];
}

export function buildCourse(height, width) {
  const elevatorWidth = 200;
  const rampOpening = 100;
  const rampHeight = 100;
  const rampGap = 100;

  const ramps = [];

  const getX = (x, flip) =>
    (flip ? width - elevatorWidth - x : x) + elevatorWidth;

  for (let i = 0; i < 5; i++) {
    ramps.push(
      buildRect(
        getX(0, i % 2),
        i * (rampHeight + rampGap) + rampGap,
        getX(width - elevatorWidth - rampOpening, i % 2),
        i * (rampHeight + rampGap) + rampGap + rampHeight,
        20,
        {
          isStatic: true,
        }
      )
    );
  }

  const elevatorWall = buildRect(
    elevatorWidth,
    rampOpening,
    elevatorWidth,
    height - rampOpening,
    20,
    {
      isStatic: true,
    }
  );

  return [...ramps, elevatorWall];
}
