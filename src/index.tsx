
import * as React from 'react';
import * as dotenv from 'dotenv';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import client from './apollo';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';

if (process.env.APP_ENV !== 'production')
  dotenv.config({
    path: '../.env',
  });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ApolloProvider>
  ,
  document.getElementById('root'),
);

if (process.env.NODE_ENV !== 'production') serviceWorker.unregister();
else serviceWorker.register({ scope: '/' });