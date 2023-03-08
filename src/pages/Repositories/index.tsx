import Slide from './Slide';
import Title from '../../components/Title';
import View from '../../components/View';

export default function Repositories(): JSX.Element {
  return (
    <View id="repositories">
      <Title data-aos="fade-right">Repositories</Title>
      <Slide />
    </View>
  );
}
