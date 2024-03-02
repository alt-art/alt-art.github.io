import { useQuery, gql } from '@apollo/client';
import ReactLoading from 'react-loading';
import Title from '../../components/Title';
import View from '../../components/View';
import { ReactNode, useContext, useEffect, useState } from 'react';
import Card from './Card';
import { Slide } from '../../components/Slide';
import Modal from './Modal';
import { ProjectsModalContext } from '../../context/ProjectsModalProvider';
import { AnimatePresence } from 'framer-motion';
import Error from '../../components/Error';
import SlideCenter from '../../components/SlideCenter';

const GET_PROJECTS = gql`
  query GetProjects {
    allProject(sort: { _createdAt: DESC }) {
      _id
      title
      description
      image {
        asset {
          url
        }
      }
    }
  }
`;

export interface Project {
  _id: string;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
  techStack: string[];
  image: {
    asset: {
      url: string;
    };
  };
}

function Projects() {
  const { id } = useContext(ProjectsModalContext);
  const [items, setItems] = useState<ReactNode[]>([]);
  const { loading, error, data } = useQuery<{ allProject: Project[] }>(
    GET_PROJECTS
  );

  useEffect(() => {
    if (data) {
      setItems(
        data.allProject.map((project) => (
          <Card key={project._id} {...project} />
        ))
      );
    }
  }, [data]);

  return (
    <View>
      <Title>Projects</Title>
      <AnimatePresence>{id && <Modal id={id} />}</AnimatePresence>
      <div className="my-4 flex h-[404px] w-full items-center bg-black">
        {loading && (
          <SlideCenter>
            <ReactLoading type="bars" color="#dd6387" height={50} width={50} />
          </SlideCenter>
        )}
        {data && <Slide elements={items} />}
        {error && (
          <SlideCenter>
            <Error />
          </SlideCenter>
        )}
      </div>
    </View>
  );
}

export default Projects;
