import React from 'react';
import styled from 'styled-components';

interface ViewStyleProps {
  dark?: boolean;
}

const ViewStyle = styled.div<ViewStyleProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  justify-content: center;

  ${({ dark }) =>
    dark &&
    `background-color: #111213;
     color: rgba(255, 255, 255, 0.8);`}
`;

interface Props {
  children: React.ReactNode;
  id?: string;
  dark?: boolean;
}
const View: React.FC<Props> = ({ children, id, dark }: Props): JSX.Element => (
  <div id={id}>
    <ViewStyle dark={dark}>{children}</ViewStyle>
  </div>
);

export default View;
