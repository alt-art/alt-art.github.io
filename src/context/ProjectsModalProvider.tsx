import { createContext, useState } from 'react';

interface ProjectsModalContext {
  id: string;
  setId: (id: string) => void;
}

export const ProjectsModalContext = createContext<ProjectsModalContext>({
  id: '',
  setId: () => {},
});

export default function ProjectsModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [id, setId] = useState('');

  return (
    <ProjectsModalContext.Provider value={{ id, setId }}>
      {children}
    </ProjectsModalContext.Provider>
  );
}
