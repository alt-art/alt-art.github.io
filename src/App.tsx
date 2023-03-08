import { useEffect } from 'react';
import StyledBackground from './components/Background';
import Footer from './components/Footer';
import 'react-alice-carousel/lib/alice-carousel.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Nav from './components/Nav';
import Intro from './pages/Intro';
import Skills from './pages/Skills';
import Repositories from './pages/Repositories';

const queryClient = new QueryClient();

function App(): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <StyledBackground />
        <Intro />
        <Skills />
        <Repositories />
        <Footer />
      </QueryClientProvider>
    </main>
  );
}

export default App;
