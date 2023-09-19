import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';

const ChakraHeader = () => {
  const headerBgColor = "blue.500"; // Define the header background color

  return (
    <Box bg={headerBgColor} color="white" p={4}>
      <Flex align="center" justify="space-between">
        <Link to="/">
          <IconButton
            icon={<FaHome />}
            aria-label="Menu"
            bg="transparent"
            color="white"
            size="lg"
          />
        </Link>
        <Heading size="md">FlipkartApp</Heading>
        <Menu bg={headerBgColor}>
          <MenuButton as={Button} rightIcon={<HamburgerIcon />} bg={headerBgColor} color="white" size="md">
            Menu
          </MenuButton>
          <MenuList bg={headerBgColor}>
              <MenuItem _hover={{ bg: 'blue.600' }}>Add Product</MenuItem>
              <MenuItem _hover={{ bg: 'blue.600' }}>Dashboard</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default ChakraHeader;
