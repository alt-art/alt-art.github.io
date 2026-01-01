import { JSX } from "react";

function Title({ children }: { children: string }): JSX.Element {
  return (
    <h1 className="my-3 inline-block px-8 text-5xl font-bold underline decoration-yellow-400/80 md:px-16 md:text-7xl">
      {children}
    </h1>
  );
}

export default Title;
