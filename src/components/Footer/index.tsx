import { mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js';
import Social from './Social';
import { JSX } from 'react';

export default function Footer(): JSX.Element {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-evenly p-2 text-base font-bold text-white/80 backdrop-blur-lg">
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
    </footer>
  );
}
