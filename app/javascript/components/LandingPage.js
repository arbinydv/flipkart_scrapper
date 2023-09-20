import theme from './theme';
import React, { useState, useEffect } from 'react';
import { ChakraProvider, Grid, GridItem, VStack, Box, chakra, Image } from '@chakra-ui/react';
import ChakraHeader from './Header';
import ProductList from './ProductList';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Toys'];

  // Function to fetch products based on the selected category
  const fetchProductsByCategory = async (category) => {
    try {
      //  API endpoint for fetching products by category
      const response = await fetch(`/api/products.json?category=${category}`);
      const data = await response.json();
      console.log("what data is coming here?", data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Function to fetch product details based on the selected product
  const fetchProductDetails = async (productId) => {
    try {
      //  API endpoint for fetching product details
      const response = await fetch(`/api/product/${productId}`);
      const data = await response.json();
      setProductDetails(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleProductClick = (productId) => {
    setSelectedProduct(productId);
    fetchProductDetails(productId);
  };

  return (
    <ChakraProvider theme={theme}>
      <ChakraHeader />
      <Grid
        templateColumns='1fr 3fr' // Adjust the column widths here
      >
        <GridItem bg='green.300' borderRadius='md' shadow='md' p={4}>
          <VStack spacing={2} align='start'>
            <chakra.h2 fontSize='lg' fontWeight='bold'>
              Categories
            </chakra.h2>
            {categories.map((category, index) => (
              <Box
                key={index}
                p={2}
                bg={selectedCategory === category ? 'blue.300' : 'white'}
                cursor='pointer'
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedProduct(null);
                  setProductDetails(null);
                }}
              >
                {category}
              </Box>
            ))}
          </VStack>
        </GridItem>
        <GridItem bg='honeydew'>
          <ProductList />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default Home;
