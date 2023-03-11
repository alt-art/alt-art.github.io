import styled from 'styled-components';

const NavStyle = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  justify-content: space-evenly;
  z-index: 1;
  a {
    text-decoration: none;
    color: #111213;
    padding: 0.5rem 1rem;
    border: 2px solid #ffffffcc;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    &:hover {
      background-color: #ffffffcc;
    }
  }
`;

export default function Nav(): JSX.Element {
  return (
    <NavStyle>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#repositories">Repositories</a>
    </NavStyle>
  );
}
