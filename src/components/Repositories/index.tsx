import Slide from './Slide';
import Title from '../Title';
import View from '../View';

export default function Repositories(): JSX.Element {
  return (
    <View id="repositories">
      <Title data-aos="fade-right">Repositories</Title>
      <Slide />
    </View>
  );
}
