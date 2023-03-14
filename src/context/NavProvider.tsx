import { createContext, useState } from 'react';

interface NavContext {
  isNavOpened: boolean;
  setIsNavOpened: (value: boolean) => void;
}

export const NavContext = createContext<NavContext>({
  isNavOpened: false,
  setIsNavOpened: () => {},
});

export default function NavProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpened, setIsNavOpened] = useState(false);

  return (
    <NavContext.Provider value={{ isNavOpened, setIsNavOpened }}>
      {children}
    </NavContext.Provider>
  );
}

export const NavConsumer = NavContext.Consumer;
