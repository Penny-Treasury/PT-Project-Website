'use client';

import { Container, Flex, FlexProps } from '@chakra-ui/react';
import { Hero } from './Hero';
import { LogoGrid } from './logo_grid/LogoGrid';
import { Stats } from './stats/Stats';
import { Info } from './Info';
import { Team } from './team/Team';

export const Main = (props: FlexProps) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" py="16" {...props}>
      <Container flex="1">
        <Hero />
        <LogoGrid />
        <Info />
        <Stats />
        <Team />
      </Container>
    </Flex>
  );
};
