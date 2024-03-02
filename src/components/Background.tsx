import React from 'react';
import P5 from 'p5';

const Sketch = React.lazy(() => import('react-p5'));

let angleX = 0;
let angleY = 0;
let angleZ = 0;
const angleSpeed = 0.001;

const Canvas: React.FC = () => {
  const setup = (p5: P5, canvasParentRef: Element): void => {
    p5.createCanvas(p5.windowWidth - 10, p5.windowHeight + 300).parent(
      canvasParentRef
    );
  };
  const draw = (p5: P5): void => {
    p5.background('#ec8daf');
    p5.noStroke();
    p5.fill(255);
    for (let i = 0; i < 9; i++) {
      const noise = p5.noise(p5.frameCount / 1000);
      for (let j = 0; j < p5.windowWidth / 30; j++) {
        let x = j * 30 + 15;
        let y = p5.windowHeight + 60 - i * 30 - j * j * (noise * 0.4);
        const angle = p5.atan2(y - p5.mouseY, x - p5.mouseX);
        x += p5.cos(angle) * 20;
        y += p5.sin(angle) * 20;
        p5.circle(x, y, 10);
        if (p5.dist(p5.mouseX, p5.mouseY, x, y) < 100) {
          p5.stroke(255, 100);
          p5.strokeWeight(2);
          p5.line(x, y, p5.mouseX, p5.mouseY);
        }
      }
    }

    function drawCube(x: number, y: number) {
      const vertices: P5.Vector[] = [];
      for (let i = 0; i < 8; i++) {
        const v = p5.createVector(
          i & 1 ? 100 : -100,
          i & 2 ? 100 : -100,
          i & 4 ? 100 : -100
        );
        const tempY = v.y * p5.cos(angleX) - v.z * p5.sin(angleX);
        const tempZ = v.y * p5.sin(angleX) + v.z * p5.cos(angleX);
        v.y = tempY;
        v.z = tempZ;
        const tempX = v.x * p5.cos(angleY) - v.z * p5.sin(angleY);
        const tempZ2 = v.x * p5.sin(angleY) + v.z * p5.cos(angleY);
        v.x = tempX;
        v.z = tempZ2;
        const tempX2 = v.x * p5.cos(angleZ) - v.y * p5.sin(angleZ);
        const tempY2 = v.x * p5.sin(angleZ) + v.y * p5.cos(angleZ);
        v.x = tempX2;
        v.y = tempY2;

        vertices.push(v);
      }

      function drawLine(vertice_start: P5.Vector, vertice_end: P5.Vector) {
        p5.stroke('#111213');
        p5.fill('#111213');
        p5.strokeWeight(4);
        p5.line(
          vertice_start.x + x,
          vertice_start.y + y,
          vertice_end.x + x,
          vertice_end.y + y
        );
        p5.circle(vertice_start.x + x, vertice_start.y + y, 10);
        p5.circle(vertice_end.x + x, vertice_end.y + y, 10);
      }

      drawLine(vertices[0], vertices[1]);
      drawLine(vertices[0], vertices[2]);
      drawLine(vertices[2], vertices[3]);
      drawLine(vertices[1], vertices[3]);

      drawLine(vertices[4], vertices[5]);
      drawLine(vertices[4], vertices[6]);
      drawLine(vertices[6], vertices[7]);
      drawLine(vertices[5], vertices[7]);

      drawLine(vertices[0], vertices[4]);
      drawLine(vertices[1], vertices[5]);
      drawLine(vertices[2], vertices[6]);
      drawLine(vertices[3], vertices[7]);
    }

    if (p5.windowWidth < 1000) {
      return;
    }

    drawCube(p5.windowWidth - 300, p5.windowHeight - 300);
    drawCube(p5.windowWidth - 300, p5.windowHeight - 500);
    drawCube(p5.windowWidth - 500, p5.windowHeight - 500);
    drawCube(p5.windowWidth - 700, p5.windowHeight - 700);

    angleX += angleSpeed;
    angleY += angleSpeed;
    angleZ += angleSpeed;
  };
  return (
    <Sketch
      setup={setup}
      draw={(p5: P5) => requestAnimationFrame(() => draw(p5))}
      windowResized={(p5) =>
        p5.resizeCanvas(p5.windowWidth - 10, p5.windowHeight + 300)
      }
    />
  );
};

const Background: React.FC = () => {
  return (
    <div className="absolute z-[-10]">
      <Canvas />
    </div>
  );
};

export default Background;
