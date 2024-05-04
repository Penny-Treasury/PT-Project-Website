'use client';

import { ChakraProvider } from '@chakra-ui/react';
import pennyTreasuryTheme from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={pennyTreasuryTheme}>{children}</ChakraProvider>;
}
