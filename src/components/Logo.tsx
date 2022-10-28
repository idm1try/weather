import { Box, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { TbSun } from 'react-icons/tb';

const LogoBox = styled.span`
  display: inline-flex;

  svg {
    transition: 200ms transform ease;
  }

  &:hover svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => (
  <Link href='/' scroll={false}>
    <Box
      transition='0.25s color ease-out'
      _hover={{ color: useColorModeValue('gray.600', 'gray.300') }}
    >
      <LogoBox>
        <Icon as={TbSun} mt={1} />
        <Text fontWeight='bold'>Weather</Text>
      </LogoBox>
    </Box>
  </Link>
);

export default Logo;
