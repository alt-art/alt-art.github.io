import ReactDOM from 'react-dom/client';
import App from './App';
import ApolloProvider from './context/ApolloProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider>
    <App />
  </ApolloProvider>
);
