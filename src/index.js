import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { RetryLink } from 'apollo-link-retry';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './style.css';
import App from './App';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`,
  },
});

const errorLink = onError(({ grapghQLErrors, networkError }) => {
  if (grapghQLErrors) {
    // do something with grapgherror
  }

  if (networkError) {
    // do something with network error
  }
});

const retryLink = new RetryLink();

const link = ApolloLink.from([errorLink, httpLink, retryLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
