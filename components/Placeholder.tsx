'use client';

import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

export const Placeholder = (props: BoxProps) => {
  let textColor = useColorModeValue('gray.900', 'gray.100');

  return <Box role="presentation" py="3" px="4" color={textColor} {...props} />;
};
