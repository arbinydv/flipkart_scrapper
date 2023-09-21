import React, { useState } from 'react';
import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '@chakra-ui/react';
import theme from './theme';
import Product from './Product';
import {useParams} from 'react-router-dom'
const ProductList = ({ categories }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { id } = useParams();
  const category = categories.find((e) => e.id === Number(id));

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        bg="brand.bg"
        color="brand.text"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Card maxW="2xl">
          <CardHeader>
            <Heading size="xl">Product List</Heading>
          </CardHeader>
          <CardBody>
            <Table variant="simple" mt={6}>
              <Thead>
                <Tr>
                  <Th>Item</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                {category && category.products.length > 0 ? (
                  category.products.map((product, index) => (
                    <Tr key={index}>
                      <Td>{product.title}</Td>
                      <Td>
                      <Button onClick={() => openProductDetails(product)}>View Product</Button>
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td colSpan="2">No products available for this category.</Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        {selectedProduct && (
          <Product product={selectedProduct} onClose={closeProductDetails} onDelete={closeProductDetails} />
        )}
      </Box>
    </ChakraProvider>
  );
};

export default ProductList;

