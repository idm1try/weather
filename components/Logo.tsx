import { Icon, Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { TbSun } from 'react-icons/tb';

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
          <Icon as={TbSun} mt={1} />
          <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontWeight='bold'>
            Weather
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
