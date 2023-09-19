import theme from './theme';
import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './Header';

const ProductForm = () => {
  const [apiData, setApiData] = useState(null);
  const [url, setUrl] = useState('');


  const handleApiCall = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error making API call:', error);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Header/>
      <Box
        bg="brand.bg"
        color="brand.text" 
        minHeight="100vh"  
        display="flex"     
        flexDirection="column" 
        alignItems="center"    
        justifyContent="center"
      >
        <Heading fontFamily="heading" mb={8}>Welcome</Heading>
        <Card maxW={80} align='center'>
          <CardHeader>
            <Heading size='xl'>Product Scrapper</Heading>
          </CardHeader>
          <CardBody>
            <FormControl mt={4}>
              <FormLabel>Enter URL of Product:</FormLabel>
              <Input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </FormControl>
          </CardBody>
          <CardFooter>
            <Button
              bg="brand.bg"
              color="brand.text"
              px={8}
              py={4}
              size='xl'
              variant='with-shadow'
              onClick={handleApiCall}
            >
              Scrape
            </Button>
          </CardFooter>
          {apiData && (
            <CardBody>
              <Text fontFamily="body">API Response:</Text>
              <Text fontFamily="body" mt={2}>
                {JSON.stringify(apiData, null, 2)}
              </Text>
            </CardBody>
          )}
        </Card>
      </Box>
    </ChakraProvider>
  );
};

export default ProductForm;
