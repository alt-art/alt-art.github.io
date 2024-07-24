interface ButtonProps {
  side: 'left' | 'right';
  onClick: () => void;
}

function SlideButton({ side, onClick }: ButtonProps) {
  return (
    <button
      aria-label={side == 'left' ? 'Slide previous' : 'Slide next'}
      onClick={onClick}
      type="button"
      className={`absolute top-0 z-10 flex h-full w-[100px] items-center justify-center bg-gradient-to-r from-black from-30% to-transparent transition-[padding] duration-300 hover:pr-6 ${
        side == 'left' ? 'left-0' : 'right-0 rotate-180'
      }`}
    >
      <div className="absolute border-[1rem] border-transparent border-r-primary" />
    </button>
  );
}

export default SlideButton;
