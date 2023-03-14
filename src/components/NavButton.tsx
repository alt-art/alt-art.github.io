import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../context/NavProvider';

const NavButtonStyle = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  z-index: 3;
`;

const Line = styled(motion.div)`
  width: 2rem;
  height: 0.2rem;
  background-color: rgba(255, 255, 255, 0.8);
`;

export default function NavButton(): JSX.Element {
  const { isNavOpened, setIsNavOpened } = useContext(NavContext);

  const lineOne = {
    open: { y: -10 },
    close: { y: 3, rotate: 45 },
  };
  const lineTwo = {
    open: { y: 0 },
    close: { opacity: 0 },
  };
  const lineThree = {
    open: { y: 10 },
    close: { y: -3, rotate: -45 },
  };

  return (
    <NavButtonStyle onClick={() => setIsNavOpened(!isNavOpened)}>
      <Line
        variants={lineOne}
        animate={isNavOpened ? 'close' : 'open'}
        transition={{ duration: 0.2, type: 'spring', stiffness: 150 }}
      />
      <Line
        variants={lineTwo}
        animate={isNavOpened ? 'close' : 'open'}
        transition={{ duration: 0.2 }}
      />
      <Line
        variants={lineThree}
        animate={isNavOpened ? 'close' : 'open'}
        transition={{ duration: 0.2, type: 'spring', stiffness: 150 }}
      />
    </NavButtonStyle>
  );
}
