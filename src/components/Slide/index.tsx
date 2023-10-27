import { ReactNode, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import SlideButton from './SlideButton';

interface SlideProps {
  elements: ReactNode[];
}

function getItemWidth(item: HTMLElement | null): number {
  if (!item) {
    return 0;
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

  const [isLastItems, setIsLastItems] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const elements = props.elements.map((element, index) => (
    <div
      key={index}
      className={`relative inline-block whitespace-normal align-top ${
        index === activeIndex && `rounded-md border-2 border-primary ${id}`
      }`}
    >
      {element}
    </div>
  ));

  useEffect(() => {
    setId(`__active-${new Date().getTime()}`);
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

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
    const renderedElements = elements.length - activeIndex;
    setIsLastItems(renderedElements * getItemWidth(getActiveItem(id)) < width);
  }, [activeIndex, animateOuter, elements, id, width]);

  return (
    <div className="relative w-full overflow-hidden">
      {activeIndex !== 0 && (
        <SlideButton
          side="left"
          onClick={() => {
            setActiveIndex(activeIndex - 1);
          }}
        />
      )}
      <motion.div
        className="relative mx-12 my-4 whitespace-nowrap"
        animate={animateOuter}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {elements}
      </motion.div>
      {!isLastItems && (
        <SlideButton
          side="right"
          onClick={() => {
            setActiveIndex(activeIndex + 1);
          }}
        />
      )}
    </div>
  );
}
