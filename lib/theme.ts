import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const breakpoints = { sm: '330px', md: '768px', lg: '960px', xl: '1200px', '2xl': '1536px' };

const theme = extendTheme({ config, breakpoints });

export default theme;
