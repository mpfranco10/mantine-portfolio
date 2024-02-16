import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#ffeaee',
  '#fcd4db',
  '#f3a7b3',
  '#ec7889',
  '#e54f66',
  '#e2364f',
  '#e12843',
  '#c81b35',
  '#b4132e',
  '#9e0326',
];

export const theme = createTheme({
  colors: {
    myColor,
  },
});
