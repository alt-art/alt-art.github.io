import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { lazy } from 'react';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const ApolloProvider = lazy(() => import('./context/ApolloProvider'));

let lang = navigator.language.split('-')[0];
(async () => {
  if (!['en', 'pt'].includes(lang)) {
    lang = 'en';
  }
  const translation = (await import(`./translations/${lang}.ts`)).default;
  i18next.use(initReactI18next).init({
    resources: {
      default: { translation },
    },
    lng: 'default',
    interpolation: {
      escapeValue: false,
    },
  });
})();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider>
    <App />
  </ApolloProvider>
);
