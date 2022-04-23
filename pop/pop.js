const { readline, print } = require("./utils");

let lines = [];
while ((line = readline())) {
  if (line !== "0") {
    lines.push(line);
  }
}

const magnitude = (x, y, z) => {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
};

const opposite = (x1, y1, z1, x2, y2, z2) => {
  return (
    Math.abs(x1 - x2) == Math.abs(x1) + Math.abs(x2) &&
    Math.abs(y1 - y2) == Math.abs(y1) + Math.abs(y2) &&
    Math.abs(z1 - z2) == Math.abs(z1) + Math.abs(z2)
  );
};

const main = () => {
  // 1 = get balloon qty
  // 2 = get balloon description
  // 3 = get gun shot qty
  // 4 = get gun shot description
  // 5 = calculate score

  let step = 1;

  let balloonQty = 0;
  let balloons = [];
  let shootQty = 0;
  let shoots = [];

  for (const line of lines) {
    console.log(`step: ${step} line: ${line}`);

    if (step === 1) {
      console.log("getting ballon qty");
      balloonQty = parseInt(line);
      step = 2;
      continue;
    }

    if (step === 2) {
      console.log("getting ballon description and formatting it values");
      const [r, s, x, y] = line.split(" ");

      balloons = [
        ...balloons,
        {
          r: parseInt(r),
          s: parseInt(s),
          x: parseInt(x),
          y: parseInt(y),
          z: parseInt(r) + parseInt(s),
          popped: false,
          balloonLine: line,
        },
      ];

      if (balloons.length === balloonQty) {
        step = 3;
      }

      continue;
    }

    if (step === 3) {
      shootQty = parseInt(line);
      step = 4;
      continue;
    }

    if (step === 4) {
      const [pX, pY, pZ, vX, vY, vZ] = line.split(" ");

      shoots = [
        ...shoots,
        {
          pX: parseInt(pX),
          pY: parseInt(pY),
          pZ: parseInt(pZ),
          vX: parseInt(vX),
          vY: parseInt(vY),
          vZ: parseInt(vZ),
          shootLine: line,
        },
      ];

      if (shoots.length === shootQty) {
        for (const shoot of shoots) {
          let score = 0;
          for (const balloon of balloons) {
            if (balloon.popped) {
              continue;
            }

            let bx = balloon.x - shoot.pX;
            let by = balloon.y - shoot.pY;
            let bz = balloon.z - shoot.pZ;

            let angle = Math.acos(
              (bx * shoot.vX + by * shoot.vY + bz * shoot.vZ) /
                magnitude(shoot.vX, shoot.vY, shoot.vZ) /
                magnitude(bx, by, bz)
            );

            if (
              angle >= Math.PI / 2 ||
              opposite(shoot.vX, shoot.vY, shoot.vZ, bx, by, bz)
            ) {
              continue;
            }

            let mag =
              (bx * shoot.vX + by * shoot.vY + bz * shoot.vZ) /
              (shoot.vX * shoot.vX + shoot.vY * shoot.vY + shoot.vZ * shoot.vZ);
            let w1x = mag * shoot.vX;
            let w1y = mag * shoot.vY;
            let w1z = mag * shoot.vZ;
            let w2x = bx - w1x;
            let w2y = by - w1y;
            let w2z = bz - w1z;
            let dist2 = Math.abs(w2x * w2x + w2y * w2y + w2z * w2z);
            if (dist2 <= balloon.r * balloon.r) {
              score++;
              balloon.popped = true;
            }
          }

          console.log({ score });
          print(score);
        }

        balloonQty = 0;
        balloons = [];
        shootQty = 0;
        shoots = [];
        step = 1;
      }

      continue;
    }
  }
};

main();
