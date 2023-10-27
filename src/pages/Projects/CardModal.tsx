import { Project } from '.';
import { urlFor } from '../../utils/sanity';
import { Img } from 'react-image';
import SkeletonImage from '../../components/SkeletonImage';

function CardModal({
  title,
  description,
  image,
  techStack,
  liveLink,
  githubLink,
}: Project) {
  return (
    <>
      <Img
        className="h-[300px] w-full object-cover sm:rounded-t-lg"
        src={urlFor(image).height(300).width(540).url()}
        alt={title}
        loader={<SkeletonImage height={300} />}
      />
      <h3 className="mx-4 mt-2 text-2xl font-bold">{title}</h3>
      <p className="mx-4">{description}</p>
      <div className="mx-4 flex flex-wrap">
        {techStack.map((tech: string) => (
          <span
            className="m-1 rounded-md border-2 border-white/10 bg-white/10 px-2 py-1 text-base leading-5"
            key={tech}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="m-4 flex flex-col justify-between gap-4 sm:flex-row">
        {liveLink && (
          <a
            className="h-fit w-full rounded-md border-2 border-primary bg-primary p-4 text-center text-xl transition-colors duration-300 hover:bg-white/10 hover:text-primary"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className=" w-full rounded-md border-2 border-white bg-white/10 p-4 text-center text-xl transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            GitHub
          </a>
        )}
      </div>
    </>
  );
}

export default CardModal;
