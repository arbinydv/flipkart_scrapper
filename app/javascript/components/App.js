import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import ProductForm from './ProductForm';

const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductForm />} />
      <Route path="/categories/*" element={<LandingPage />} />
    </Routes>
  </ChakraProvider>
);

export default App;