import Background from './components/Background';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import { JSX } from 'react';

function App(): JSX.Element {
  return (
    <main className="bg-primary">
      <Background />
      <Intro />
      <Footer />
    </main>
  );
}

export default App;
