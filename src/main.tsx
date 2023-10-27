import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { lazy } from 'react';

const ApolloProvider = lazy(() => import('./context/ApolloProvider'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider>
    <App />
  </ApolloProvider>
);
