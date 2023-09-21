import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const headerBgColor = 'blue.500';

  const headerStyles = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
  };

  const location = useLocation();

  return (
    <Box style={headerStyles} bg={headerBgColor} color="white" p={4}>
      <Flex align="center" justify="space-between">
        <Link to="/categories">
          <IconButton
            icon={<FaHome />}
            aria-label="Menu"
            bg="transparent"
            color="white"
            size="lg"
          />
        </Link>
        <Heading size="md">FlipkartApp</Heading>
        <Menu>
          {location.pathname !== '/products' && (
            <Link to="/products">
              <MenuButton
                as={Button}
                rightIcon={<AddIcon />}
                bg="transparent"
                color="white"
                size="md"
              >
                Scrape Product
              </MenuButton>
            </Link>
          )}
        </Menu>
      </Flex>
    </Box>
  );
};

export default ChakraHeader;
