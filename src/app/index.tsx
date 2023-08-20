import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '../i18n';

import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';

import { HelmetProvider } from 'react-helmet-async';

import { BrowserRouter } from 'react-router-dom';
import Router from '../router';

import { UserContextProvider } from '../contexts/User';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  uri: import.meta.env.VITE_GRAPHQL_API_URI,
  headers: {
    'client-name': import.meta.env.VITE_CLIENT_NAME,
    'client-version': import.meta.env.VITE_CLIENT_VERSION,
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <UserContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserContextProvider>
      </HelmetProvider>
    </ApolloProvider>
  );
}
