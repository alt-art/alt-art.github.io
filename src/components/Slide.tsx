import React, { ReactNode } from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import { useQuery } from 'react-query'
import ReactLoading from 'react-loading'
import { getRepositories } from '../utils/api'
import Card from './Card'

const SlideStyle = styled.div`
  position: sticky;
  width: 100%;
  height: 404px;
  display: flex;
  flex-direction: column;
  background-color: #111213;
  margin: 1rem 0;
  padding: 1rem 0;
  & li {
    transition: all 0.3s ease;
  }
  & .__active {
    border: 2px solid #dd6387;
    border-radius: 0.5rem;
  }
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1.5rem;
  & a {
    color: #dd6387;
    text-decoration: none;
  }
`

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
    content: '';
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
    transform: translateX(${(props) => (props.side === 'right' ? '10px' : '-10px')});
  }
`

const Slide = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [items, setItems] = React.useState<ReactNode[]>([])
  const { data: repos, status } = useQuery(
    'repos',
    getRepositories
  )

  React.useEffect(() => {
    if (status === 'success') {
      setItems(
        repos.map((repo) => (
          <Card
            key={repo.html_url}
            title={repo.name}
            desc={repo.description}
            link={repo.html_url}
            image={repo.thumb}
          />
        ))
      )
    }
  }, [repos, status])

  if (!repos) {
    return (
      <SlideStyle>
        <Center>
          <ReactLoading type="bars" color="#dd6387" height={50} width={50} />
        </Center>
      </SlideStyle>
    )
  }

  if (status === 'error') {
    return (
      <SlideStyle>
        <Center>
          <p>Sorry, something went wrong.</p>
          <p>
            <a href="https://github.com/alt-art?tab=repositories">
              You can check my projects on GitHub
            </a>
          </p>
        </Center>
      </SlideStyle>
    )
  }

  return (
    <SlideStyle>
      {activeIndex > 0 && (
        <SlideButton onClick={() => setActiveIndex(activeIndex - 1)} side="left" aria-label="Previous"/>
      )}
      <AliceCarousel
        mouseTracking
        autoWidth
        items={items}
        disableButtonsControls
        disableDotsControls
        activeIndex={activeIndex}
        onSlideChanged={(e) => setActiveIndex(e.item)}
        paddingLeft={60}
        paddingRight={20}
      />
      {activeIndex < items.length - 1 && (
        <SlideButton onClick={() => setActiveIndex(activeIndex + 1)} side="right" aria-label="Next"/>
      )}
    </SlideStyle>
  )
}

export default Slide
