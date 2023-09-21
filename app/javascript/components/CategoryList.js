import React, { useState } from 'react';
import { GridItem, VStack, chakra, List, ListItem, Box, ChakraProvider } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router

const CategoryList = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredCategories = categories.filter((category) => category.name);

  return (
    <ChakraProvider>
      <GridItem bg='green.300' borderRadius='md' shadow='md' p={4}>
        <VStack spacing={2} align='start'>
          <chakra.h2 fontSize='lg' fontWeight='bold'>
            Categories
          </chakra.h2>
          <List spacing={2} alignItems="start">
            {filteredCategories.map((category, index) => (
              <ListItem key={index} p={2}>
                {/* Wrap the category name with NavLink */}
                <NavLink
                  to={`/categories/${category.id}`} // Define the link path
                >
                  <Box
                    bg={selectedCategory === category.name ? 'blue.300' : 'white'}
                    borderRadius="md"
                    p={2}
                    transition="background-color 0.3s ease"
                    _hover={{ bg: 'blue.300', color: 'white' }}
                  >
                    {category.name}
                  </Box>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </VStack>
      </GridItem>
    </ChakraProvider>
  );
};

export default CategoryList;

