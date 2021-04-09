import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App'; 
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>);
});
