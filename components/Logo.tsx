import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { WiDaySunny } from 'react-icons/wi';
import styled from '@emotion/styled';
import Link from 'next/link';

const LogoBox = styled.span`
  display: inline-flex;

  svg {
    transition: 200ms ease;
  }

  &:hover svg {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href='/'>
      <a>
        <LogoBox>
          <Box as={WiDaySunny} mt={1} />
          <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontWeight='bold'>
            Weather
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
