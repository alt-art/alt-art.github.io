import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { NavContext } from '../context/NavProvider';

function NavLink({
  children,
  href,
  onClick,
}: {
  children: string;
  href: string;
  onClick: () => void;
}): JSX.Element {
  return (
    <a
      href={href}
      onClick={onClick}
      className="my-4 border-b-2 border-white/25 text-4xl text-white/80 transition-[border-bottom] duration-200 ease-in-out hover:border-white"
    >
      {children}
    </a>
  );
}

export default function Nav(): JSX.Element {
  const { setIsNavOpened } = useContext(NavContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.nav
      className="fixed z-20 flex h-full w-full flex-col items-center justify-center bg-black/80 backdrop-blur-lg"
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    >
      <NavLink href="#about" onClick={() => setIsNavOpened(false)}>
        About
      </NavLink>
      <NavLink href="#projects" onClick={() => setIsNavOpened(false)}>
        Projects
      </NavLink>
      <NavLink href="#skills" onClick={() => setIsNavOpened(false)}>
        Skills
      </NavLink>
      <NavLink href="#repositories" onClick={() => setIsNavOpened(false)}>
        Repositories
      </NavLink>
    </motion.nav>
  );
}
