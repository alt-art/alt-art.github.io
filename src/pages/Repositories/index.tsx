import { ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ReactLoading from 'react-loading';
import Title from '../../components/Title';
import View from '../../components/View';
import { getRepositories } from '../../utils/api';
import Card from './Card';
import { Slide } from '../../components/Slide';
import Error from '../../components/Error';
import SlideCenter from '../../components/SlideCenter';

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
          />
        ))
      );
    }
  }, [repos, status]);

  return (
    <View dark>
      <Title>Repositories</Title>
      <div
        id="repositories"
        className="mx-4 flex h-[404px] items-center bg-black"
      >
        {status === 'success' && <Slide elements={items} />}
        {status === 'loading' && (
          <SlideCenter>
            <ReactLoading type="bars" color="#ec8daf" height={50} width={50} />
          </SlideCenter>
        )}
        {status === 'error' && (
          <SlideCenter>
            <Error />
          </SlideCenter>
        )}
      </div>
    </View>
  );
}

export default Repositories;
