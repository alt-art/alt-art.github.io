import { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';
import SlideButton from './SlideButton';

interface SlideProps {
  elements: ReactNode[];
}

const SlideStyle = styled.div`
  position: relative;
  direction: ltr;
  width: 100%;
  background-color: #111213;
  overflow: hidden;

  .__active {
    border: 2px solid #dd6387;
    border-radius: 0.5rem;
  }
`;

const Outer = styled(motion.div)`
  position: relative;
  margin: 1rem 3rem;
  white-space: nowrap;
`;

const ItemWrapper = styled(motion.div)`
  position: relative;
  display: inline-block;
  white-space: normal;
  vertical-align: top;
`;

function getItemWidth(item: HTMLElement | null): number {
  if (!item) {
    return Infinity;
  }
  const width = item.getBoundingClientRect().width;
  return width - 4;
}

function getActiveItem(uuid: string): HTMLElement | null {
  if (!uuid) {
    return null;
  }
  return document.querySelector(`.${uuid}`);
}

export function Slide(props: SlideProps): JSX.Element {
  const animateOuter = useAnimationControls();

  const [id, setId] = useState('');

  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const elements = props.elements.map((element, index) => (
    <ItemWrapper
      key={index}
      className={index === activeIndex ? `__active ${id}` : ''}
    >
      {element}
    </ItemWrapper>
  ));

  useEffect(() => {
    setId(`__active-${new Date().getTime()}`);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  const renderedElements = elements.length - (activeIndex % elements.length);
  const isLastItems =
    renderedElements * getItemWidth(getActiveItem(id)) < width;

  useEffect(() => {
    const activeItem = getActiveItem(id);
    if (!activeItem) {
      return;
    }
    activeItem.getBoundingClientRect().width;
    const offset = (-activeIndex % elements.length) * getItemWidth(activeItem);
    void animateOuter.start({
      x: offset || 0,
    });
  }, [activeIndex, animateOuter, elements, id]);

  return (
    <SlideStyle>
      {activeIndex !== 0 && (
        <SlideButton
          side="left"
          onClick={() => {
            setActiveIndex(activeIndex - 1);
          }}
        />
      )}
      <Outer
        animate={animateOuter}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {elements}
      </Outer>
      {!isLastItems && (
        <SlideButton
          side="right"
          onClick={() => {
            setActiveIndex(activeIndex + 1);
          }}
        />
      )}
    </SlideStyle>
  );
}
