import styled from 'styled-components';
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

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  height: 404px;
  width: 100%;
  background-color: #111213;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  & a {
    color: #dd6387;
    text-decoration: none;
  }
`;

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
    <View id="projects">
      <Title>Projects</Title>
      <AnimatePresence>{id && <Modal id={id} />}</AnimatePresence>
      <SlideContainer>
        {loading && (
          <Center>
            <ReactLoading type="bars" color="#dd6387" height={50} width={50} />
          </Center>
        )}
        {data && <Slide elements={items} />}
        {error && (
          <Center>
            <p>Sorry, something went wrong.</p>
            <p>
              <a
                href="https://github.com/alt-art?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                You can check my projects on GitHub
              </a>
            </p>
          </Center>
        )}
      </SlideContainer>
    </View>
  );
}

export default Projects;
