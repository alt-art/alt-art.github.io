import React from 'react';
import Draw from 'react-altdraw';

const angleSpeed = 0.1;

const Background: React.FC = () => {
  return (
    <>
      <div className="absolute">
        <Draw
          onResize={(canvas) => {
            canvas.width = window.innerWidth - 10;
            canvas.height = window.innerHeight;
          }}
          setup={(canvas) => {
            canvas.width = window.innerWidth - 10;
            canvas.height = window.innerHeight;
            
          }}
          draw={(dc) => {
            const resolution = 20;
            const cols = Math.ceil(dc.windowWidth / resolution);
            const rows = Math.ceil(dc.windowHeight / resolution);
            for (let x = 0; x < cols; x++) {
              for (let y = 0; y < rows; y++) {
                const xPos = x * resolution;
                const yPos = y * resolution;
                if (
                  Math.sin(
                    y * 0.8 + dc.frameCount * angleSpeed +
                      Math.cos(x * 0.8 + dc.frameCount * angleSpeed)
                  ) <
                  0
                ) {
                  dc.noFill();
                } else {
                  // yellow color
                  dc.fill("#facc15");
                }
                dc.rect(xPos, yPos, resolution, resolution);
              }
            }
          }}
        />
      </div>
    </>
  );
};

export default Background;
