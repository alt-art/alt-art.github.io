import { mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js';
import styled from 'styled-components';
import Social from './Social';

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 0.5rem;
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: bold;
  z-index: 3;
`;

export default function Footer(): JSX.Element {
  return (
    <FooterStyle>
      <Social
        label="alt-art"
        icon={mdiGithub}
        link="https://github.com/alt-art"
      />
      <Social
        label="Linkedin"
        icon={mdiLinkedin}
        link="https://www.linkedin.com/in/altart/"
      />
      <Social label="Email" icon={mdiEmail} link="mailto:me@altart.top" />
    </FooterStyle>
  );
}
