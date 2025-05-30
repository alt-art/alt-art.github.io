import { JSX, ReactNode, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Title from '../../components/Title';
import View from '../../components/View';
import { getRepositories } from '../../utils/api';
import Card from './Card';
import { Slide } from '../../components/Slide';
import Error from '../../components/Error';
import SlideCenter from '../../components/SlideCenter';
import { useTranslation } from 'react-i18next';
import { Loading } from '../../components/Loading';

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

  const { t } = useTranslation();

  return (
    <View dark>
      <Title>{t('title.repositories')}</Title>
      <div
        id="repositories"
        className="mx-4 flex h-[404px] items-center bg-black"
      >
        {status === 'success' && <Slide elements={items} />}
        {status === 'loading' && (
          <SlideCenter>
            <Loading />
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
