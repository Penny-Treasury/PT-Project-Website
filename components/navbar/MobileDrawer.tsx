'use client';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { DocumentCollapse } from './DocumentCollapse';
import { ToggleButton } from './ToggleButton';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <ToggleButton
        isOpen={isOpen}
        onClick={onToggle}
        aria-label="Open menu"
        display={{ base: 'inline-flex', lg: 'none' }}
      />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <DrawerBody mt="72px" p="4">
            <Stack spacing="1">
              <Button size="lg" variant="tertiary" justifyContent="start">
                Dashboard
              </Button>
              <Button size="lg" variant="tertiary" justifyContent="start">
                Analysis
              </Button>
              <DocumentCollapse />
              <Button size="lg" variant="tertiary" justifyContent="start">
                History
              </Button>
              <Button
                rightIcon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                variant="tertiary"
                justifyContent="start"
                size="lg"
              >
                {colorMode === 'light' ? 'Darkmode' : 'Lightmode'}
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
