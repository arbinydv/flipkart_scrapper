// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   Heading,
//   Card,
//   CardHeader,
//   CardBody,
//   useToast,
//   ChakraProvider,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
//   ModalFooter,
//   Button,
// } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import theme from './theme';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null); // To track which product's modal is open
//   const navigate = useNavigate();
//   const csrfToken = document.querySelector("meta[name=csrf-token]").content;

//   // Function to fetch products from the API
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('/api/products.json');
//       if (!response.ok) throw Error(response.statusText);
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   // Fetch products when the component mounts
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const openModal = (product) => {
//     setSelectedProduct(product);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <ChakraProvider theme={theme}>
//       <Box
//         bg="brand.bg"
//         color="brand.text"
//         minHeight="100vh"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Card maxW="2xl">
//           <CardHeader>
//             <Heading size="xl">Product List</Heading>
//           </CardHeader>
//           <CardBody>
//             <Table variant="simple" mt={6}>
//               <Thead>
//                 <Tr>
//                   <Th>URL</Th>
//                   <Th>Details</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {products.map((product, index) => (
//                   <Tr key={index}>
//                     <Td>{product.title}</Td>
//                     <Td>
//                       <Button onClick={() => openModal(product)}>View Product</Button>
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </CardBody>
//         </Card>

//         {selectedProduct && (
//           <Modal isOpen={!!selectedProduct} onClose={closeModal}>
//             <ModalOverlay />
//             <ModalContent>
//               <ModalHeader>{selectedProduct.title}</ModalHeader>
//               <ModalCloseButton />
//               <ModalBody>
//                 <a href={selectedProduct.url} target="_blank" rel="noopener noreferrer">
//                   {selectedProduct.url}
//                 </a>
//               </ModalBody>
//               <ModalFooter>
//                 <Button colorScheme="blue" mr={3} onClick={closeModal}>
//                   Close
//                 </Button>
//               </ModalFooter>
//             </ModalContent>
//           </Modal>
//         )}
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default ProductList;
// ProductList.js
// ProductList.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  useToast,
  ChakraProvider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import theme from './theme';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const csrfToken = document.querySelector("meta[name=csrf-token]").content;

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products.json');
      if (!response.ok) throw Error(response.statusText);
      const data = await response.json();
      setProducts(data.reverse());
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
                {products.map((product, index) => (
                  <Tr key={index}>
                    <Td>{product.title}</Td>
                    <Td>
                      <Button onClick={() => openProductDetails(product)}>View Product</Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>

        {selectedProduct && (
          <Product product={selectedProduct} onClose={closeProductDetails} />
        )}
      </Box>
    </ChakraProvider>
  );
};

export default ProductList;

