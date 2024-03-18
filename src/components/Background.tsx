import React from 'react';
import Draw from 'react-altdraw';
import DrawContext2D, { Vector } from 'react-altdraw/dist/drawContext';

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
    const tempY = v.y * Math.cos(angleX) - v.z * Math.sin(angleX);
    const tempZ = v.y * Math.sin(angleX) + v.z * Math.cos(angleX);
    v.y = tempY;
    v.z = tempZ;
    const tempX = v.x * Math.cos(angleY) - v.z * Math.sin(angleY);
    const tempZ2 = v.x * Math.sin(angleY) + v.z * Math.cos(angleY);
    v.x = tempX;
    v.z = tempZ2;
    const tempX2 = v.x * Math.cos(angleZ) - v.y * Math.sin(angleZ);
    const tempY2 = v.x * Math.sin(angleZ) + v.y * Math.cos(angleZ);
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
    dc.circle(vertice_start.x + x, vertice_start.y + y, 5);
    dc.circle(vertice_end.x + x, vertice_end.y + y, 5);
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
            canvas.height = window.innerHeight + 150;
          }}
          setup={(canvas) => {
            canvas.width = window.innerWidth - 10;
            canvas.height = window.innerHeight + 150;
          }}
          draw={(dc) => {
            dc.noStroke();
            dc.fill('#ffffff');
            for (let i = 0; i < 9; i++) {
              const noise = dc.noise(dc.frameCount / 1000);
              for (let j = 0; j < dc.windowWidth / 30; j++) {
                let x = j * 30 + 15;
                let y = dc.windowHeight - 90 - i * 30 - j * j * (noise * 0.4);
                const angle = Math.atan2(y - dc.mouseY, x - dc.mouseX);
                x += Math.cos(angle) * 20;
                y += Math.sin(angle) * 20;
                dc.noStroke();
                dc.circle(x, y, 5);
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

            drawCube(dc, dc.windowWidth - 300, dc.windowHeight - 440);
            drawCube(dc, dc.windowWidth - 300, dc.windowHeight - 640);
            drawCube(dc, dc.windowWidth - 500, dc.windowHeight - 640);
            drawCube(dc, dc.windowWidth - 700, dc.windowHeight - 840);

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
