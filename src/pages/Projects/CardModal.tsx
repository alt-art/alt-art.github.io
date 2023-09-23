import styled from 'styled-components';
import { Project } from '.';
import { urlFor } from '../../utils/sanity';
import { Img } from 'react-image';
import SkeletonImage from '../../components/SkeletonImage';

const Image = styled(Img)`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  @media (max-width: 540px) {
    border-radius: 0;
  }
`;

export const Title = styled.h3`
  margin: 0.5rem 1rem;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  margin: 0.5rem 1rem;
`;

const TechStack = styled.span`
  margin: 0.2rem 0.2rem;
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0rem 1rem;
`;

interface LinkProps {
  highlight?: boolean;
}

const Link = styled.a<LinkProps>`
  padding: 1rem;
  margin: 0.5rem;
  width: 100%;
  font-size: 1.2rem;
  text-decoration: none;
  ${({ highlight }) =>
    highlight
      ? `
      background-color: #dd6387;
      border: 2px solid #dd6387;
      `
      : `
      background-color: rgba(255, 255, 255, 0.1);
      border: 2px solid #ffffffcc;
      `}
  color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  text-align: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  &:hover {
    ${({ highlight }) =>
      highlight && `background-color: rgba(255, 255, 255, 0.1);`}
    border: 2px solid #dd6387;
    color: #dd6387;
  }

  @media (max-width: 540px) {
    margin: 0.5rem 0;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

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
      <Image
        src={urlFor(image).height(300).width(540).url()}
        alt={title}
        loader={<SkeletonImage height={300} />}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TechStackContainer>
        {techStack.map((tech: string) => (
          <TechStack key={tech}>{tech}</TechStack>
        ))}
      </TechStackContainer>
      <LinksContainer>
        {liveLink && (
          <Link highlight href={liveLink} target="_blank" rel="noreferrer">
            Live
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink} target="_blank" rel="noreferrer">
            GitHub
          </Link>
        )}
      </LinksContainer>
    </>
  );
}

export default CardModal;
