import React, { useState, useEffect } from 'react';
import { GridItem, VStack, chakra, List, ListItem, Box, ChakraProvider } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredCategories, setFilteredCategories] = useState([]);

  // Filter categories that have products
  useEffect(() => {
    const filtered = categories.filter(category => category.products.length > 0);
    setFilteredCategories(filtered);
  }, [categories]);

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
                <NavLink
                  to={`/categories/${category.id}`}
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
