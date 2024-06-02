import { extendTheme, type ThemeConfig, type Colors } from '@chakra-ui/react';
import { theme } from '@chakra-ui/pro-theme';
import stepperTheme from './themes/stepper';

const proTheme = extendTheme(theme);

const themeConfig: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const themeColors: Colors = {
  colors: {
    primary: '#FCA311',
    secondary: '#dae2ea',
    ternary: '#172037',
    background: '#0F182E',
    backgroundSecondary: '#edf6f9',
    orange: {
      '50': '#322001',
      '100': '#653F01',
      '200': '#e38e03',
      '300': '#FCAF31',
      '400': '#FCAF31',
      '500': '#FC9E03',
      '600': '#e38e03',
      '700': '#975F02',
      '800': '#653F01',
      '900': '#322001',
    },
  },
};

let pennyTreasuryTheme = extendTheme(
  { ...themeConfig, ...themeColors },
  {
    components: {
      Stepper: stepperTheme
    }
  },
  proTheme
);

export default pennyTreasuryTheme;
