import React from 'react';
import Sketch from 'react-p5';
import styled from 'styled-components';
import P5 from 'p5';

const Canvas: React.FC = () => {
  const setup = (p5: P5, canvasParentRef: Element): void => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight + 300).parent(
      canvasParentRef
    );
  };
  const draw = (p5: P5): void => {
    p5.background('#dd6387');
    p5.fill(255);
    p5.noStroke();
    for (let i = 0; i < 9; i++) {
      const noise = p5.noise(p5.frameCount / 1000);
      for (let j = 0; j < p5.windowWidth / 30; j++) {
        let x = j * 30 + 15;
        let y = p5.windowHeight + 60 - i * 30 - j * j * (noise * 0.4);
        const angle = p5.atan2(y - p5.mouseY, x - p5.mouseX);
        x += p5.cos(angle) * 20;
        y += p5.sin(angle) * 20;
        p5.circle(x, y, 10);
      }
    }
  };
  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={(p5) =>
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight + 300)
      }
    />
  );
};

const StyledBackground = styled.div`
  position: absolute;
  z-index: -1;
`;

const Background: React.FC = () => {
  return (
    <StyledBackground>
      <Canvas />
    </StyledBackground>
  );
};

export default Background;
