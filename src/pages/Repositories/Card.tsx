import { JSX } from "react";

interface Props {
  image?: string;
  title: string;
  desc: string;
  link: string;
}

const Card = ({ title, desc, link }: Props): JSX.Element => {
  return (
    <a
      className="m-4 flex h-[340px] w-[340px] select-none flex-col justify-center rounded-lg bg-white/10 text-white/80 transition-transform duration-300 hover:scale-105"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <h2 className="mx-4 my-2 text-2xl font-bold">{title}</h2>
      <p className="mx-4 my-2 text-base leading-5">{desc}</p>
    </a>
  );
};

export default Card;
