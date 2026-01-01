import Desc from '../../components/Desc';
import Title from '../../components/Title';
import View from '../../components/View';
import { JSX } from 'react';

export default function Intro(): JSX.Element {
  return (
    <View>
      <div className="z-20 bg-black text-purple-400 p-3 w-fit m-16">
        <Title>Pedro Mendes</Title>
        <Desc> Software Engineer &amp; Artist</Desc>
      </div>
    </View>
  );
}
