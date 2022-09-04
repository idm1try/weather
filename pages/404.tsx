import NextLink from 'next/link';
import { Box, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  return (
    <Box textAlign='center' mt={5}>
      <Heading
        display='inline-block'
        as='h2'
        size='2xl'
        color={useColorModeValue('teal.500', 'teal.200')}
      >
        404
      </Heading>
      <Text fontSize='18px' mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you&apos;re looking for does not seem to exist
      </Text>
      <NextLink href='/'>
        <Button colorScheme='teal' leftIcon={<FaHome />}>
          Go to Home
        </Button>
      </NextLink>
    </Box>
  );
};

export default NotFound;
