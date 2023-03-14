import { motion } from 'framer-motion';
import { useContext } from 'react';
import styled from 'styled-components';
import { NavContext } from '../context/NavProvider';

const NavStyle = styled(motion.nav)`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  z-index: 2;
`;

const NavLink = styled.a`
  font-size: 2rem;
  margin: 1rem 0;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.21);
  cursor: pointer;
  transition: border-bottom 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid #ffffff;
  }
`;

export default function Nav(): JSX.Element {
  const { setIsNavOpened } = useContext(NavContext);

  return (
    <NavStyle
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    >
      <NavLink href="#about" onClick={() => setIsNavOpened(false)}>
        About
      </NavLink>
      <NavLink href="#projects" onClick={() => setIsNavOpened(false)}>
        Projects
      </NavLink>
      <NavLink href="#skills" onClick={() => setIsNavOpened(false)}>
        Skills
      </NavLink>
      <NavLink href="#repositories" onClick={() => setIsNavOpened(false)}>
        Repositories
      </NavLink>
    </NavStyle>
  );
}
