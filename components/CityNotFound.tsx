import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const CityNotFound = () => {
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
        City Not Found
      </Text>
      <Text color='gray.500' mb={6}>
        The city you&apos;re looking for does not seem to exist
      </Text>
    </Box>
  );
};

export default CityNotFound;
