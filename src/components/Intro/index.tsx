import Desc from '../Desc';
import Title from '../Title';
import View from '../View';

export default function Intro(): JSX.Element {
  return (
    <View id="about">
      <Title data-aos="fade-right">Pedro Mendes</Title>
      <Desc data-aos="fade-right">
        There are no challenges I don&apos;t want to solve with programming, as
        a Full-stack Web Developer or a Rust enthusiast.
      </Desc>
    </View>
  );
}
