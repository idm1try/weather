import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  ModalOverlay,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { TbBrandGithub, TbMenu2, TbSearch } from 'react-icons/tb';
import useWeather from '../lib/useWeather';
import Logo from './Logo';
import Search from './Search';
import ThemeToggleButton from './ThemeToggleButton';
import UnitsToggleButton from './UnitsToggleButton';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const { units, setUnits } = useWeather();

  function toggleUnits() {
    setUnits(units == 'us' ? 'metric' : 'us');
  }

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
          <Heading as='h1' ml={3} size='lg' letterSpacing='tighter'>
            <Logo />
          </Heading>
        </Flex>
        <Box flex={1} textAlign='right' mr={3} display={{ base: 'none', md: 'inline-block' }}>
          <ThemeToggleButton />
          <UnitsToggleButton />
          <IconButton
            as='a'
            href='https://github.com/idm1try/weather-nextjs'
            aria-label='Source Code'
            icon={<TbBrandGithub />}
            ml={3}
          />
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <IconButton icon={<TbSearch />} aria-label='search' onClick={onOpen} ml={3} />
          </Box>
        </Box>
        <Box mr={3} display={{ base: 'none', md: 'inline-block' }}>
          <Search />
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} size='sm'>
          <ModalOverlay
            bg={useColorModeValue('#F7FAFC80', '#17192380')}
            backdropFilter='blur(10px)'
          />
          <ModalContent mx={5}>
            <Search />
          </ModalContent>
        </Modal>
        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <IconButton icon={<TbSearch />} aria-label='search' onClick={onOpen} mr={3} />
          <Menu isLazy id='navbar-menu'>
            <MenuButton as={IconButton} icon={<TbMenu2 />} aria-label='Options' />
            <MenuList>
              <MenuItem onClick={toggleColorMode}>Toggle Theme</MenuItem>
              <MenuItem onClick={toggleUnits}>Toggle Units</MenuItem>
              <MenuItem as='a' href='https://github.com/idm1try/weather-nextjs'>
                Source Code
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
