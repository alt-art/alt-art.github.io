import React from 'react';
import Draw from './Draw';
import DrawContext2D, { Vector } from './Draw/context';

let angleX = 0;
let angleY = 0;
let angleZ = 0;

function drawCube(dc: DrawContext2D, x: number, y: number) {
  const vertices: Vector[] = [];
  for (let i = 0; i < 8; i++) {
    const v = dc.createVector(
      i & 1 ? 100 : -100,
      i & 2 ? 100 : -100,
      i & 4 ? 100 : -100
    );
    const tempY = v.y * dc.cos(angleX) - v.z * dc.sin(angleX);
    const tempZ = v.y * dc.sin(angleX) + v.z * dc.cos(angleX);
    v.y = tempY;
    v.z = tempZ;
    const tempX = v.x * dc.cos(angleY) - v.z * dc.sin(angleY);
    const tempZ2 = v.x * dc.sin(angleY) + v.z * dc.cos(angleY);
    v.x = tempX;
    v.z = tempZ2;
    const tempX2 = v.x * dc.cos(angleZ) - v.y * dc.sin(angleZ);
    const tempY2 = v.x * dc.sin(angleZ) + v.y * dc.cos(angleZ);
    v.x = tempX2;
    v.y = tempY2;

    vertices.push(v);
  }

  function drawLine(vertice_start: Vector, vertice_end: Vector) {
    dc.stroke('#111213');
    dc.fill('#111213');
    dc.strokeWeight(4);
    dc.line(
      vertice_start.x + x,
      vertice_start.y + y,
      vertice_end.x + x,
      vertice_end.y + y
    );
    dc.circle(vertice_start.x + x, vertice_start.y + y, 10);
    dc.circle(vertice_end.x + x, vertice_end.y + y, 10);
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

const angleSpeed = 0.001;

const Background: React.FC = () => {
  return (
    <>
      <div className="absolute z-[-10]">
        <Draw
          onResize={(canvas) => {
            canvas.width = window.innerWidth - 10;
            canvas.height = window.innerHeight + 100;
          }}
          setup={(canvas) => {
            canvas.width = window.innerWidth - 10;
            canvas.height = window.innerHeight + 100;
          }}
          draw={(dc) => {
            dc.noStroke();
            dc.fill('#ffffff');
            for (let i = 0; i < 9; i++) {
              const noise = dc.noise(dc.frameCount / 1000);
              for (let j = 0; j < dc.windowWidth / 30; j++) {
                let x = j * 30 + 15;
                let y = dc.windowHeight - 40 - i * 30 - j * j * (noise * 0.4);
                const angle = dc.atan2(y - dc.mouseY, x - dc.mouseX);
                x += dc.cos(angle) * 20;
                y += dc.sin(angle) * 20;
                dc.circle(x, y, 10);
                if (dc.dist(dc.mouseX, dc.mouseY, x, y) < 100) {
                  dc.stroke('#ffffff64');
                  dc.strokeWeight(2);
                  dc.line(x, y, dc.mouseX, dc.mouseY);
                }
              }
            }

            if (dc.windowWidth < 1000) {
              return;
            }

            drawCube(dc, dc.windowWidth - 300, dc.windowHeight - 400);
            drawCube(dc, dc.windowWidth - 300, dc.windowHeight - 600);
            drawCube(dc, dc.windowWidth - 500, dc.windowHeight - 600);
            drawCube(dc, dc.windowWidth - 700, dc.windowHeight - 800);

            angleX += angleSpeed;
            angleY += angleSpeed;
            angleZ += angleSpeed;
          }}
        />
      </div>
    </>
  );
};

export default Background;
