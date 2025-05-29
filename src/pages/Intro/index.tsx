import { useTranslation } from 'react-i18next';
import Desc from '../../components/Desc';
import Title from '../../components/Title';
import View from '../../components/View';
import { JSX } from 'react';

export default function Intro(): JSX.Element {
  const { t } = useTranslation();
  return (
    <View>
      <Title>Pedro Mendes</Title>
      <Desc>{t('slogan')}</Desc>
    </View>
  );
}
