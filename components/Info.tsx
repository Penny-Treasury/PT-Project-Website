import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

export const Info = () => (
  <Box
    bg={{
      base: useColorModeValue('white', 'gray.800'),
      lg: useColorModeValue('secondary', 'ternary'),
    }}
  >
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: '0', lg: '12' }}
      py={{ base: '0', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column-reverse', lg: 'row' }}
        spacing={{ base: '0', lg: '20' }}
      >
        <Box
          width={{ lg: 'sm' }}
          transform={{ base: 'translateY(-50%)', lg: 'none' }}
          bg={{
            base: useColorModeValue('blue.200', 'blue.500'),
            lg: 'transparent',
          }}
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}
        >
          <Stack spacing={{ base: '8', lg: '10' }}>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Heading size={{ base: 'md', md: 'lg' }}>Get started</Heading>
              <Heading textStyle={{ base: 'lg', md: 'xl' }} fontWeight="normal">
                ethereum.org is your portal into the world of Ethereum. The tech
                is new and ever-evolving - it helps to have a guide. Here&apos;s
                what we recommend you do if you want to dive in.
              </Heading>
            </Stack>
            <HStack spacing="3">
              <Button
                alignSelf="start"
                size="2xl"
                variant="link"
                colorScheme="orange"
                rightIcon={<FiArrowRight />}
              >
                Learn now
              </Button>
            </HStack>
          </Stack>
        </Box>
        <Flex flex="1" overflow="hidden">
          <Image
            src="/assets/info_image.jpg"
            alt="Lovely Image"
            fallback={<Skeleton />}
            maxH="450px"
            minW="300px"
            objectFit="cover"
            flex="1"
          />
        </Flex>
      </Stack>
    </Box>
  </Box>
);
