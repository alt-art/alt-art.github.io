import styled from 'styled-components';
import { Project } from '.';
import { useContext } from 'react';
import { ProjectsModalContext } from '../../context/ProjectsModalProvider';
import { urlFor } from '../../utils/sanity';
import { Img } from 'react-image';
import SkeletonImage from '../../components/SkeletonImage';

const CardStyle = styled.a`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 340px;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 0.5rem;
  margin: 1rem;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled(Img)`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const Title = styled.h3`
  margin: 0.5rem 1rem;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  margin: 0.5rem 1rem;
`;

function Card({ image, title, description, _id }: Project): JSX.Element {
  const { setId } = useContext(ProjectsModalContext);

  return (
    <CardStyle onClick={() => setId(_id)}>
      <Image
        src={urlFor(image).width(340).height(150).url()}
        alt={title}
        loader={<SkeletonImage height={150} />}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardStyle>
  );
}

export default Card;
