import styled from 'styled-components';

interface CardStyleProps {
  center?: boolean
}

const CardStyle = styled.a<CardStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  max-width: 340px;
  height: 340px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
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

const CardImage = styled.img`
  width: auto;
  background-color: white;
  max-height: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 1rem;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  margin: 0.5rem 1rem;
`;

interface Props {
  image: string
  title: string
  desc: string
  link: string
}

const Card = ({ title, desc, image, link }: Props): JSX.Element => {
  return (
    <CardStyle href={link} target="_blank" rel="noreferrer" center={!image}>
      {image && <CardImage src={image} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardDesc>{desc}</CardDesc>
    </CardStyle>
  );
};

export default Card;
