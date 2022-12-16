import { mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js';
import styled from 'styled-components';
import Social from '../Social';

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0.4rem;
  background-color: #2d2d2dbe;
  backdrop-filter: blur(5px);
  border-left: 1px solid #808080;
  border-top: 1px solid #808080;
  color: white;
  font-size: 1rem;
  border-radius: 0.5rem 0 0 0;
  font-weight: bold;
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
      <Social
        label="Email"
        icon={mdiEmail}
        link="mailto:pedromendescraft@gmail.com"
      />
    </FooterStyle>
  );
}
