import theme from './theme';
import React, { useState, useEffect } from 'react';
import { ChakraProvider, Grid, GridItem, Box } from '@chakra-ui/react';
import ChakraHeader from './Header';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';

const LandingPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await window.fetch('/api/categories.json');
        if (!response.ok) throw Error(response.statusText);

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ChakraHeader />
      <Box paddingTop="70px">
        <Grid templateColumns='1fr 3fr'>
            <CategoryList
              categories={categories}
            />
          <GridItem bg='honeydew'>
          <Routes>
           <Route path=":id/*" element={<ProductList categories={categories} />} />
           <Route path="/" element={<Welcome/>} />
          </Routes>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};


export default LandingPage;
