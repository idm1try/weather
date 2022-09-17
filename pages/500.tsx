import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Animate from '../components/Animate';

const NotFound = () => {
  return (
    <Animate>
      <Box textAlign='center' mt={5}>
        <Heading
          display='inline-block'
          as='h2'
          size='2xl'
          color={useColorModeValue('teal.500', 'teal.200')}
        >
          500
        </Heading>
        <Text fontSize='18px' fontWeight='bold' mt={3} mb={5}>
          Internal Server Error
        </Text>
      </Box>
    </Animate>
  );
};

export default NotFound;
