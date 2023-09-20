import React, { useState } from 'react';
import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  FormControl,
  FormLabel,
  useToast,
  ChakraProvider,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ChakraHeader from './Header';
import theme from './theme';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    url: '',
    price: '',
    title: '',
    description: '',
    size: '',
    mobile_number: '',
  });

  const toast = useToast();
  const navigate = useNavigate();
  const csrfToken = document.querySelector("meta[name=csrf-token]").content;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.url) {
      toast({
        title: 'Error',
        description: 'URL field cannot be empty.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      return; 
    }

    try {
      const response = await fetch('/api/products.json', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
      });

      if (!response.ok) throw Error(response.statusText);

      const data = await response.json();
      setFormData({
        ...formData, // Preserve existing form data
        ...data,     // Update with data from the API response
      });

      toast({
        title: 'Product Added.',
        description: 'The item was added successfully to the Product List.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });

      setFormData({ url: '', ...data });
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <ChakraHeader/>
      <Box
      bg="brand.bg"
      color="brand.text"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Card maxW="2xl">
        <CardHeader>
          <Heading size="xl">Product Scraper</Heading>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Enter URL of Product:</FormLabel>
              <Input
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              />
            </FormControl>
            <Button
              type="submit"
              bg="brand.bg"
              color="brand.text"
              mt={4}
              size="lg"
              variant="solid"
            >
              Scrape
            </Button>
          </form>
        </CardBody>
      </Card>
    </Box>
      </ChakraProvider>

  );
};

export default ProductForm;
