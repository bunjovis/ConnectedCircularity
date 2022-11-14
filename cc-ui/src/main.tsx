import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { AuthProvider } from './components/AuthProvider';
import './index.css';
import theme from './theme';
import { store } from './store';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
