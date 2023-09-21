import React, { useState } from 'react';
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
  Link as ChakraLink,
  Input,
  Button,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon, CloseIcon } from '@chakra-ui/icons';

const Product = ({ product, onClose }) => {
  const toast = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUrl, setEditedUrl] = useState(product.url);

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
          description: 'The item was successfully deleted.',
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
    setIsEditing(true);
  };

  const updatedProduct = async () => {
    try {
      const response = await window.fetch(`/api/products/${product.id}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: editedUrl }),
      });

      if (!response.ok) throw Error(response.statusText);
      toast({
        title: 'URL Updated.',
        description: 'The URL has been successfully updated.',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating URL:', error);
    }
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
                onClick={() => deleteProduct(product.id)}
                mr={8}
              />
              <IconButton
                icon={<CloseIcon />}
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
                {isEditing ? (
                  <>
                    <Input
                      value={editedUrl}
                      onChange={(e) => setEditedUrl(e.target.value)}
                      mr={2}
                    />
                    <Button
                      colorScheme="blue"
                      size="sm"
                      onClick={updatedProduct}
                    >
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <ChakraLink
                      href={editedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="blue.500"
                    >
                      {editedUrl}
                    </ChakraLink>
                    <IconButton
                      colorScheme="blue"
                      size="sm"
                      aria-label="Edit"
                      icon={<EditIcon />}
                      onClick={handleEdit}
                    />
                  </>
                )}
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
