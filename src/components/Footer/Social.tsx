import React from 'react';
import styled from 'styled-components';
import { Icon } from '@mdi/react';

interface Props {
  label: string
  icon: string
  link: string
}

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  box-shadow: inset 0 -2px 0 0 #ffffff37;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.2rem 0.4rem;
  color: white;
  &:nth-child(even) {
    color: white;
  }

  &:hover {
    box-shadow: inset 0 -2px 0 0 #ffffff;
  }
`;

const Social: React.FC<Props> = ({ label, icon, link }: Props): JSX.Element => {
  return (
    <SocialLink href={link} target="_blank" rel="noopener noreferrer">
      <Icon path={icon} size={1} />
      &nbsp;
      <p>{label}</p>
    </SocialLink>
  );
};

export default Social;
