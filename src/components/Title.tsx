import styled from 'styled-components';

const Title = styled.h1`
  display: inline-block;
  font-size: 4rem;
  font-weight: bolder;
  margin: 0;
  padding: 0 4rem;
  text-decoration: #ffffffcc underline;
  @media (max-width: 768px) {
    padding: 0 2rem;
    font-size: 3rem;
  }
`;

export default Title;
