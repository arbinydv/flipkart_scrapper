// Product.js
import React from 'react';
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  List,
  ListItem,
  Icon,
  Link as ChakraLink
} from '@chakra-ui/react';

const Product = ({ product, onClose }) => {
  return (
    <ChakraProvider>
      <Modal isOpen={true} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {product.title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <strong>URL:</strong>
                <ChakraLink href={product.url} target="_blank" rel="noopener noreferrer" color="blue.500">
                  {product.url}
                </ChakraLink>
              </ListItem>
   
              <ListItem>
                <strong>Title:</strong> {product.title}
              </ListItem>
              <ListItem>
                <strong>Description:</strong> {product.description}
              </ListItem>
              <ListItem>
                <strong>Price:</strong> {product.price}
              </ListItem>
              <ListItem>
                <strong>Mobile Number:</strong> {product.mobile_number}
              </ListItem>
              <ListItem>
                <strong>Size:</strong> {product.size}
              </ListItem>
              <ListItem>
                <strong>Product Images:</strong>
                {product.image_urls && product.image_urls.map(image => <img src={image} alt="product" />)}
              </ListItem>
            </List>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default Product;
