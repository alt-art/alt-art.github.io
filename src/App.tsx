import Background from './components/Background';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import Nav from './components/Nav';
import Intro from './pages/Intro';
import Skills from './pages/Skills';
import Repositories from './pages/Repositories';
import Projects from './pages/Projects';
import ProjectsModalProvider from './context/ProjectsModalProvider';
import NavButton from './components/NavButton';
import NavProvider, { NavConsumer } from './context/NavProvider';
import { AnimatePresence } from 'framer-motion';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <main>
      <NavProvider>
        <NavButton />
        <NavConsumer>
          {({ isNavOpened }) => (
            <AnimatePresence>{isNavOpened && <Nav />}</AnimatePresence>
          )}
        </NavConsumer>
        <Background />
        <Intro />
        <ProjectsModalProvider>
          <Projects />
        </ProjectsModalProvider>
        <Skills />
        <QueryClientProvider client={queryClient}>
          <Repositories />
        </QueryClientProvider>
        <Footer />
      </NavProvider>
    </main>
  );
}

export default App;
