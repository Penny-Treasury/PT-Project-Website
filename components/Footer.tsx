import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Logo } from './Logo';

export const Footer = () => (
  <Container as="footer" role="contentinfo" py={{ base: '6', md: '8' }}>
    <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo />
        <ButtonGroup variant="text" colorScheme="gray">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
          />
          <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="fg.subtle">
        &copy; {new Date().getFullYear()} PennyTreasury, Inc. All rights
        reserved.
      </Text>
    </Stack>
  </Container>
);
