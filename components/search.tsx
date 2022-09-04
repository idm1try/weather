import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents='none' children={<Box as={FaSearch} color='gray.500' />} />
        <Input
          aria-label='Enter City...'
          placeholder='Enter City...'
          variant='filled'
          type='text'
        />
      </InputGroup>
    </Box>
  );
}
