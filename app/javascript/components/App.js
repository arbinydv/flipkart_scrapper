import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme'


const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/products/*" element={<LandingPage />} />
    </Routes>
  </ChakraProvider>
);

export default App;