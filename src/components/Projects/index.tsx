import Slide from './Slide';
import Title from '../Title';
import View from '../View';

export default function Projects(): JSX.Element {
  return (
    <View id="projects">
      <Title data-aos="fade-right">Projects</Title>
      <Slide />
    </View>
  );
}
