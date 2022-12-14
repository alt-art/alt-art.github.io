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
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  color: white;
  &:nth-child(even) {
    color: white;
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
