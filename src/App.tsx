import Background from './components/Background';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';
import Intro from './pages/Intro';
import Repositories from './pages/Repositories';
import Projects from './pages/Projects';
import ProjectsModalProvider from './context/ProjectsModalProvider';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <main className="bg-primary">
      <Background />
      <Intro />
      <ProjectsModalProvider>
        <Projects />
      </ProjectsModalProvider>
      <QueryClientProvider client={queryClient}>
        <Repositories />
      </QueryClientProvider>
      <Footer />
    </main>
  );
}

export default App;
