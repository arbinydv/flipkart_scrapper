import theme from './theme';
import React, { useState, useEffect } from 'react';
import { ChakraProvider, Grid, GridItem, VStack, Box, chakra, Image } from '@chakra-ui/react';
import Header from './Header';

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
      const response = await fetch(`/api/products?category=${category}`);
      const data = await response.json();
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
      <Header />
      <Grid templateColumns='repeat(3, 1fr)' gap={0.5}>
        <GridItem w='100%' h='auto' bg='green.300'>
          <VStack spacing={2} align='start' p={4}>
            <chakra.h2 fontSize='lg' fontWeight='bold'>Categories</chakra.h2>
            {categories.map((category, index) => (
              <Box
                key={index}
                p={2}
                bg={selectedCategory === category ? 'blue.300' : 'white'}
                borderRadius='md'
                shadow='md'
                width='fit-content'
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedProduct(null); 
                  setProductDetails(null); 
                }} 
                cursor='pointer'
              >
                {category}
              </Box>
            ))}
          </VStack>
        </GridItem>
        <GridItem w='100%' h='auto' bg='green.500'>
          <VStack spacing={4} align='start' p={4}>
            <chakra.h2 fontSize='lg' fontWeight='bold'>Products</chakra.h2>
            {products.map((product, index) => (
              <Box
                key={index}
                p={2}
                bg={selectedProduct === product.id ? 'blue.300' : 'white'} 
                borderRadius='md'
                shadow='md'
                width='fit-content'
                onClick={() => handleProductClick(product.id)} 
                cursor='pointer'
              >
                {product.name}
              </Box>
            ))}
          </VStack>
        </GridItem>
        <GridItem w='100%' h='auto' bg='green.700'>
          {productDetails && (
            <VStack spacing={4} align='start' p={4}>
              <chakra.h2 fontSize='lg' fontWeight='bold'>Details </chakra.h2>
              {productDetails.images.map((image, index) => (
                <Image
                  key={index}
                  src={image.url}
                  alt={`Image ${index}`}
                  maxW='200px'
                />
              ))}
              <chakra.p>{productDetails.description}</chakra.p>
            </VStack>
          )}
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default Home;
