import styled, { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: -200% 0%;
  }
`;

const SkeletonImage = styled.div<{ height: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
  background: #111213;
  background-image: linear-gradient(
    110deg,
    #111213 8%,
    #292a2b 18%,
    #111213 33%
  );
  background-size: 200% 100%;
  border-radius: 10px 10px 0 0;
  animation: ${skeletonAnimation} 1.5s ease-in-out infinite;

  @media (max-width: 540px) {
    border-radius: 0;
  }
`;

export default SkeletonImage;
