'use client';

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Show,
  useColorMode,
} from '@chakra-ui/react';
import { DocumentPopover } from './DocumentPopover';
import { Logo } from '../Logo';
import { MobileDrawer } from './MobileDrawer';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="section">
      <Box position="relative" zIndex="tooltip">
        <Container py="4">
          <HStack justify="space-between" spacing="8">
            <HStack spacing="10">
              <HStack spacing="3">
                <MobileDrawer />
                <Logo />
              </HStack>
              <ButtonGroup
                variant="text"
                colorScheme="gray"
                spacing="8"
                display={{ base: 'none', lg: 'flex' }}
              >
                <Button>Dashbaord</Button>
                <Button>Analysis</Button>
                <DocumentPopover />
                <Button>History</Button>
              </ButtonGroup>
            </HStack>
            <HStack spacing={{ base: '2', md: '4' }}>
              <ButtonGroup spacing="2">
                <Show above="sm">
                  <IconButton
                    variant="text"
                    aria-label="ColorSchema switch"
                    colorScheme="gray"
                    onClick={toggleColorMode}
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  />
                </Show>
                <Button variant="solid" colorScheme="orange">
                  Connect wallet
                </Button>
              </ButtonGroup>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
