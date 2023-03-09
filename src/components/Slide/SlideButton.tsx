import styled from 'styled-components';

interface ButtonProps {
  side: 'left' | 'right'
}

const SlideButton = styled.button<ButtonProps>`
  position: absolute;
  top: 0;
  ${(props) => (props.side === 'left' ? 'left: 0;' : 'right: 0;')}
  background: linear-gradient(
    ${(props) => (props.side === 'right' ? '90deg' : '270deg')},
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  border: none;
  cursor: pointer;
  width: 100px;
  height: 100%;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    top: calc(50% - 10px);
    left: 50%;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    ${(props) => props.side === 'right' ? 'border-left' : 'border-right'}: 20px solid #dd6387;
    transition: all 0.3s ease;
  }
  &:hover::before {
    transform: translateX(
      ${(props) => (props.side === 'right' ? '10px' : '-10px')}
    );
  }
`;

export default SlideButton;
