import React from 'react'
import styled from 'styled-components'
import Arrow from './Arrow'

interface StyledProps {
  arrow?: boolean
}

const ViewStyle = styled.div<StyledProps>`
  width: 100vw;
  height: ${(props) => (props.arrow ? 'calc(100vh - 4rem - 2rem)' : '100vh')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start;
`

const ViewFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface Props {
  children: React.ReactNode
  arrow?: boolean
}
const View: React.FC<Props> = ({ children, arrow }: Props): JSX.Element => (
  <div>
    <ViewStyle arrow={arrow}>{children}</ViewStyle>
    <ViewFooter>{arrow && <Arrow />}</ViewFooter>
  </div>
)

export default View
