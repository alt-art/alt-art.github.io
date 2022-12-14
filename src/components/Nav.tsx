import styled from 'styled-components';

const NavStyle = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  justify-content: space-around;
  z-index: 10;
  a {
    text-decoration: none;
    color: #111213;
    padding: 0.5rem 1rem;
    border: 2px solid #ffffff;
    transition: all 0.3s ease;
    background-color: #dd6387;
    &:hover {
      background-color: #ffffff;
    }
  }

`;

export default function Nav(): JSX.Element {
  return (
    <NavStyle data-aos="fade-down">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
    </NavStyle>
  );
}
