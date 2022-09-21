import { Box, Input, InputGroup, InputLeftElement, InputRightElement, Kbd } from '@chakra-ui/react';
import { useHotkeys } from '@mantine/hooks';
import { useRef } from 'react';
import { TbSearch } from 'react-icons/tb';
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
        <InputLeftElement pointerEvents='none' children={<Box as={TbSearch} color='gray.500' />} />
        <Input
          variant='filled'
          aria-label='Enter city'
          placeholder='Enter city'
          type='text'
          spellCheck='false'
          value={location}
          onChange={event => setLocation(event.target.value)}
          ref={inputRef}
        />
        <InputRightElement
          display={{ base: 'none', md: 'inline-flex' }}
          pointerEvents='none'
          children={<Kbd>/</Kbd>}
        />
      </InputGroup>
    </Box>
  );
}
