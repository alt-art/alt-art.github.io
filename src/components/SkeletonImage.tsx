import { JSX } from "react";

function SkeletonImage({ height }: { height: number }): JSX.Element {
  return (
    <div className={`w-full h-[${height}px] animate-skeleton rounded-t-lg`} />
  );
}

export default SkeletonImage;
