import { useContext, useEffect, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { Icon } from '@mdi/react';
import { mdiCloseCircle } from '@mdi/js';
import { Project } from '.';
import { ProjectsModalContext } from '../../context/ProjectsModalProvider';
import CardModal from './CardModal';
import Error from '../../components/Error';

const ModalView = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111213b9;
  color: rgba(255, 255, 255, 0.8);
  z-index: 3;
`;

const ModalStyles = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 540px;
  background-color: #292a2b;
  border-radius: 10px;

  @media (max-width: 540px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background-color: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 570px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  & a {
    color: #dd6387;
    text-decoration: none;
  }
`;

const GET_PROJECT_BY_ID = gql`
  query GetProjectById($id: ID!) {
    Project(id: $id) {
      _id
      title
      description
      liveLink
      githubLink
      techStack
      image {
        asset {
          url
        }
      }
    }
  }
`;

function Modal({ id }: { id: string }) {
  const { data, loading } = useQuery<{ Project: Project }>(GET_PROJECT_BY_ID, {
    variables: { id },
  });

  const { setId } = useContext(ProjectsModalContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setId('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [ref, setId]);

  return (
    <ModalView
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalStyles
        ref={ref}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <CloseButton onClick={() => setId('')}>
          <Icon path={mdiCloseCircle} size={1.3} />
        </CloseButton>
        {loading && (
          <Center>
            <ReactLoading type="bars" color="#dd6387" height={50} width={50} />
          </Center>
        )}
        {data?.Project && <CardModal {...data.Project} />}
        {!loading && !data?.Project && (
          <Center>
            <Error />
          </Center>
        )}
      </ModalStyles>
    </ModalView>
  );
}

export default Modal;
