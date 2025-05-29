import { useContext, useEffect, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { Icon } from '@mdi/react';
import { mdiCloseCircle } from '@mdi/js';
import { Project } from '.';
import { ProjectsModalContext } from '../../context/ProjectsModalProvider';
import CardModal from './CardModal';
import Error from '../../components/Error';
import SlideCenter from '../../components/SlideCenter';
import { Loading } from '../../components/Loading';

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
    <motion.div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/75 text-white/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative flex h-full w-full flex-col bg-black-light sm:h-auto sm:w-[540px] sm:rounded-xl"
        ref={ref}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
      >
        <button
          className="absolute right-0 top-0 p-4 transition-colors duration-300 hover:text-white/50"
          onClick={() => setId('')}
        >
          <Icon path={mdiCloseCircle} size={1.3} />
        </button>
        {loading && (
          <SlideCenter modal>
            <Loading />
          </SlideCenter>
        )}
        {data?.Project && <CardModal {...data.Project} />}
        {!loading && !data?.Project && (
          <SlideCenter modal>
            <Error />
          </SlideCenter>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Modal;
