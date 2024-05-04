'use client';

import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';
import { Navbar } from '@/components/navbar/Navbar';
import { Flex, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
  let bg = useColorModeValue('backgroundSecondary', 'background');

  return (
    <Flex direction="column" flex="1" backgroundColor={bg}>
      <Navbar />
      <Main />
      <Footer />
    </Flex>
  );
}
