import React from 'react';
import {
  ChakraProvider,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Flex,
} from '@chakra-ui/react';
import { FaSmile } from 'react-icons/fa';
import theme from './theme';

const Welcome = () => {
  const alertStyles = {
    padding: '1rem', 
    margin: '1rem',
    borderRadius: '1rem', 
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
          style={alertStyles}
        >
          <AlertIcon boxSize="70px" mr={0}>
            <FaSmile size={70}/> 
          </AlertIcon>
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Hello there,
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Please select a category to display products.
          </AlertDescription>
        </Alert>
      </Flex>
    </ChakraProvider>
  );
};

export default Welcome;

