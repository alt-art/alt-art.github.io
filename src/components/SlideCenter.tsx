import { ReactNode } from 'react';

function SlideCenter({
  children,
  modal,
}: {
  children: ReactNode;
  modal?: boolean;
}): JSX.Element {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center text-center text-2xl text-white/80 ${
        modal ? `h-[540px]` : 'h-full'
      }`}
    >
      {children}
    </div>
  );
}

export default SlideCenter;
