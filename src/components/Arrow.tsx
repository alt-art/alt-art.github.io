import React from 'react'
import styled from 'styled-components'

const ArrowStyled = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2d2d2dbe;
  border: 1px solid #808080;
  backdrop-filter: blur(5px);
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  cursor: pointer;
`

interface CompProps {
  delay?: number
  tiny?: boolean
}

const ArrowComp = styled.div<CompProps>`
  width: 1rem;
  height: 1rem;
  border-right: 0.3rem solid #FFFFFF6a;
  border-bottom: 0.3rem solid #ffffff6a;
  transform: rotate(45deg);
  z-index: 1;
  animation: fade 1s infinite alternate;
  animation-delay: ${(props) => props.delay}s;
  @keyframes fade {
    to {
      opacity: 0;
    }
    from {
      opacity: 1;
    }
  }
`

const Arrow: React.FC = () => {
  const arrowRef = React.useRef<HTMLButtonElement>(null)
  return (
    <ArrowStyled
      ref={arrowRef}
      aria-label="Scroll down"
      onClick={() => {
        window.scrollTo({
          top: arrowRef.current?.offsetTop,
          behavior: 'smooth'
        })
      }}
    >
      <ArrowComp />
      <ArrowComp delay={0.5} />
    </ArrowStyled>
  )
}

export default Arrow
