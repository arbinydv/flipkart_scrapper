import { extendTheme } from '@chakra-ui/react';

const theme = {
   fonts: {
       heading: '"Avenir Next", sans-serif',
       body: '"Open Sans", sans-serif',
   },
   colors: {
       brand: {
           bg: '#9747FF',
           text: '#fff',
           card: '#0A99FF',
       },
   },
   sizes: {
       xl: {
           h: '56px',
           fontSize: 'lg',
           px: '32px',
           bg: '#9747FF'
       },
   },
}

export default extendTheme(theme);