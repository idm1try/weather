import {
  Box,
  Container,
  Flex,
  Heading,
  Hide,
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Show,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { FaGithub, FaSearch } from 'react-icons/fa';
import Logo from './logo';
import Search from './search';
import ThemeToggleButton from './themeToggleButton';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      backdropFilter='blur(10px)'
      bg={useColorModeValue('#F7FAFC80', '#17192380')}
      zIndex={2}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        textAlign='center'
        justifyContent='space-between'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' ml={3} size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box flex={1} textAlign='right' mr={3}>
          <ThemeToggleButton />
          <IconButton
            as='a'
            href='https://github.com/idm1try/weather-nextjs'
            icon={<FaGithub />}
            aria-label='source'
            ml={3}
          />
          <Show breakpoint='(max-width: 600px)'>
            <IconButton icon={<FaSearch />} aria-label='search' onClick={onOpen} ml={3} />
          </Show>
          <Modal isOpen={isOpen} onClose={onClose} size='sm'>
            <ModalOverlay
              bg={useColorModeValue('#F7FAFC80', '#17192380')}
              backdropFilter='blur(10px)'
            />
            <ModalContent maxW='20rem'>
              <Search />
            </ModalContent>
          </Modal>
        </Box>
        <Hide breakpoint='(max-width: 600px)'>
          <Box mr={3}>
            <Search />
          </Box>
        </Hide>
      </Container>
    </Box>
  );
};

export default Navbar;
