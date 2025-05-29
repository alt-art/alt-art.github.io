import { JSX } from "react";

function Desc({ children }: { children: string }): JSX.Element {
  return <p className="max-w-lg px-8 text-xl leading-5 md:px-16">{children}</p>;
}

export default Desc;
