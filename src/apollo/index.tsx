import { ApolloClient, InMemoryCache } from '@apollo/client';

import { config } from '../config/index';

const client = new ApolloClient({
  uri: config.apiUrl,
  cache: new InMemoryCache(),
});

export default client;

