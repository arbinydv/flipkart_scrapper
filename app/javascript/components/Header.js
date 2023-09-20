import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Button,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { FaHome } from 'react-icons/fa';

const ChakraHeader = () => {
  const headerBgColor = "blue.500"; // Define the header background color

  const location = useLocation(); // to conditionally render + Add Product Tab

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
          {location.pathname === '/' ? (
            <Link to="/products">
              <MenuButton as={Button} rightIcon={<AddIcon />} bg={headerBgColor} color="white" size="md">
                Add Product
              </MenuButton>
            </Link>
          ) : null}
        </Menu>
      </Flex>
    </Box>
  );
};

export default ChakraHeader;
