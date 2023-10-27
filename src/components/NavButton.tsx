import { HTMLMotionProps, motion } from 'framer-motion';
import { useContext } from 'react';
import { NavContext } from '../context/NavProvider';

function Line(props: HTMLMotionProps<'div'>): JSX.Element {
  return <motion.div {...props} className="h-1 w-8 bg-white/80" />;
}

export default function NavButton(): JSX.Element {
  const { isNavOpened, setIsNavOpened } = useContext(NavContext);

  const lineOne = {
    open: { y: -10 },
    close: { y: 3, rotate: 45 },
  };
  const lineTwo = {
    open: { y: 0 },
    close: { opacity: 0 },
  };
  const lineThree = {
    open: { y: 10 },
    close: { y: -3, rotate: -45 },
  };

  return (
    <button
      aria-label="Open navigation"
      className="fixed right-0 top-0 z-30 flex h-16 w-16 flex-col items-center justify-center border-2 border-white/80 backdrop-blur-lg"
      onClick={() => setIsNavOpened(!isNavOpened)}
    >
      <Line
        variants={lineOne}
        animate={isNavOpened ? 'close' : 'open'}
        transition={{ duration: 0.2, type: 'spring', stiffness: 150 }}
      />
      <Line
        variants={lineTwo}
        animate={isNavOpened ? 'close' : 'open'}
        transition={{ duration: 0.2 }}
      />
      <Line
        variants={lineThree}
        animate={isNavOpened ? 'close' : 'open'}
        transition={{ duration: 0.2, type: 'spring', stiffness: 150 }}
      />
    </button>
  );
}
