import React from 'react';
import {
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Spacer,
  ModalBody,
  List,
  ListItem,
  Flex,
  Box,
  IconButton,
  useToast,
  Link as ChakraLink
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CloseIcon } from '@chakra-ui/icons'; 

const Product = ({ product, onClose }) => {

  const toast = useToast();
  const deleteProduct = async (productId) => {
    const sure = window.confirm('Are you sure?');

    if (sure) {
      try {
        const response = await window.fetch(`/api/products/${productId}.json`, {
          method: 'DELETE',
        });

        if (!response.ok) throw Error(response.statusText);
        toast({
          title: 'Product Deleted.',
          description: 'The item was added successfully deleted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
        onClose();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };
  const handleEdit = () => {
    alert('Editing this')
  };

  return (
    <ChakraProvider>
      <Modal isOpen={true} onClose={onClose} size="70%">
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>
          <Flex justifyContent="space-between" alignItems="center">
            <span>{product.title}</span>
            <Spacer />
              <IconButton
                colorScheme="red"
                size="sm"
                aria-label="Delete"
                icon={<DeleteIcon />}
                onClick={() => deleteProduct(product.id)} // the function gets called when delete button is triggered not while rendering.
                mr={8}
              />
            <IconButton
                icon={<CloseIcon />} // You can use your custom close icon here
                onClick={onClose}
                aria-label="Close"
                colorScheme="blue"
                size="sm"
              />
          </Flex>
        </ModalHeader>
          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <strong>URL:</strong>
                <ChakraLink href={product.url} target="_blank" rel="noopener noreferrer" color="blue.500">
                  {product.url}
                </ChakraLink>
                <div>
                <IconButton
                  colorScheme="blue"
                  size="sm"
                  aria-label="Edit"
                  icon={<EditIcon />}
                  onClick={handleEdit}
                />
                </div>
           
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
              <Flex>
                  {product.image_urls &&
                    product.image_urls.map((image, index) => (
                      <Box
                        key={index}
                        m={3}
                      >
                        <img
                          src={image}
                          alt={`product ${index + 1}`}
                          style={{ maxWidth: '100px' }}
                        />
                      </Box>
                    ))}
                </Flex>
              </ListItem>
            </List>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default Product;