import { ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import Title from '../../components/Title';
import View from '../../components/View';
import { getRepositories } from '../../utils/api';
import Card from './Card';
import { Slide } from '../../components/Slide';
import Error from '../../components/Error';

const SlideContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  height: 404px;
  align-items: center;
  background-color: #111213;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  & a {
    color: #dd6387;
    text-decoration: none;
  }
`;

function Repositories(): JSX.Element {
  const [items, setItems] = useState<ReactNode[]>([]);
  const { data: repos, status } = useQuery('repos', getRepositories);

  useEffect(() => {
    if (status === 'success') {
      setItems(
        repos.map((repo) => (
          <Card
            key={repo.html_url}
            title={repo.name}
            desc={repo.description}
            link={repo.html_url}
            image={repo.thumb}
          />
        ))
      );
    }
  }, [repos, status]);

  return (
    <View dark>
      <Title id="repositories" data-aos="fade-right">
        Repositories
      </Title>
      <SlideContainer>
        {status === 'success' && <Slide elements={items} />}
        {status === 'loading' && (
          <Center>
            <ReactLoading type="bars" color="#dd6387" height={50} width={50} />
          </Center>
        )}
        {status === 'error' && (
          <Center>
            <Error />
          </Center>
        )}
      </SlideContainer>
    </View>
  );
}

export default Repositories;
