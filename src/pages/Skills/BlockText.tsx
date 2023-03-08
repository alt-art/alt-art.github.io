import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  margin: 0.5rem 4rem;
  border-bottom: 4px solid #111213;
  align-items: center;
  align-content: center;
`;

const TextStyle = styled.span`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  height: 2.5rem;
  width: 2.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  ${() =>
    Math.random() > 0.6 ? 'background-color: #111213; color: #ffffffcc;' : ''}
`;

interface Props {
  text: string
}

export default function BlockText({ text }: Props): JSX.Element {
  return (
    <div>
      <Wrap>
        {text.split('').map((word, i) => (
          <TextStyle key={i}>{word}</TextStyle>
        ))}
      </Wrap>
    </div>
  );
}
