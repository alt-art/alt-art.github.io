import React, { JSX } from 'react';
import { Icon } from '@mdi/react';

interface Props {
  label: string;
  icon: string;
  link: string;
}

const Social: React.FC<Props> = ({ label, icon, link }: Props): JSX.Element => {
  return (
    <a
      className="flex items-center border-b-2 px-2 py-1 transition-[border-color] duration-300 hover:border-yellow-400"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon path={icon} size={1} />
      &nbsp;
      <p>{label}</p>
    </a>
  );
};

export default Social;
