import { Box, Heading, Text } from '@chakra-ui/react';

const CityNotFound = () => {
  return (
    <Box textAlign='center' my={100}>
      <Heading mt={3} mb={2}>
        City Not Found
      </Heading>
      <Text color='gray.500' mb={6}>
        The city you&apos;re looking for does not seem to exist
      </Text>
    </Box>
  );
};

export default CityNotFound;
