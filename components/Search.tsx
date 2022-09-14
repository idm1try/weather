import {
  Box,
  Hide,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
} from '@chakra-ui/react';
import { useHotkeys } from '@mantine/hooks';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import useWeather from '../lib/useWeather';

export default function Search() {
  const { location, setLocation } = useWeather();
  const inputRef = useRef<HTMLInputElement>(null);

  function focusToInput() {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  }

  useHotkeys([['/', () => focusToInput()]]);

  return (
    <Box>
      <InputGroup>
        <InputLeftElement pointerEvents='none' children={<Box as={FaSearch} color='gray.500' />} />
        <Input
          variant='filled'
          aria-label='Enter city'
          placeholder='Enter city'
          type='text'
          value={location.toLowerCase()}
          ref={inputRef}
          onChange={e => setLocation(e.target.value)}
        />
        <Hide breakpoint='(max-width: 600px)'>
          <InputRightElement pointerEvents='none' children={<Kbd>/</Kbd>} />
        </Hide>
      </InputGroup>
    </Box>
  );
}
