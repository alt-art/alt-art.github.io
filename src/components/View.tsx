import React from 'react';
import styled from 'styled-components';

const ViewStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  justify-content: center;
`;

interface Props {
  children: React.ReactNode;
  id?: string;
}
const View: React.FC<Props> = ({ children, id }: Props): JSX.Element => (
  <div id={id}>
    <ViewStyle>{children}</ViewStyle>
  </div>
);

export default View;
