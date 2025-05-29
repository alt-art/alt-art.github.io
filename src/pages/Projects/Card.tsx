import { Project } from '.';
import { JSX, useContext } from 'react';
import { ProjectsModalContext } from '../../context/ProjectsModalProvider';
import { urlFor } from '../../utils/sanity';
import { Img } from 'react-image';
import SkeletonImage from '../../components/SkeletonImage';

function Card({ image, title, description, _id }: Project): JSX.Element {
  const { setId } = useContext(ProjectsModalContext);

  return (
    <button
      className="m-4 flex h-[340px] w-[340px] flex-col rounded-lg bg-white/10 text-left text-white/80 transition-transform duration-300 hover:scale-105"
      onClick={() => setId(_id)}
    >
      <Img
        className="h-[150px] w-full rounded-t-lg object-cover"
        src={urlFor(image).width(340).height(150).url()}
        alt={title}
        loader={<SkeletonImage height={150} />}
      />
      <div className="px-4 py-2 leading-5">
        <h2 className="mb-3 text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </button>
  );
}

export default Card;
