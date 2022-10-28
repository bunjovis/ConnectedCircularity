import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import theme from './components/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App 
        />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
