import BlockText from './BlockText';
import Title from '../../components/Title';
import View from '../../components/View';

export default function Skills(): JSX.Element {
  return (
    <View id="skills">
      <Title>Skills</Title>
      <BlockText text="Rust" />
      <BlockText text="NestJS" />
      <BlockText text="TypeScript" />
      <BlockText text="Express" />
      <BlockText text="NodeJS" />
      <BlockText text="React" />
      <BlockText text="Vue" />
    </View>
  );
}
