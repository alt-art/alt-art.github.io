interface Props {
  text: string;
}

export default function BlockText({ text }: Props): JSX.Element {
  return (
    <div>
      <div className="mx-16 my-2 flex content-center items-center border-b-4 border-b-black">
        {text.split('').map((word, i) => (
          <span
            className={`flex h-10 w-10 items-center justify-center p-1 text-2xl font-bold ${
              Math.random() > 0.6 && 'bg-black text-white'
            }`}
            key={i}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
