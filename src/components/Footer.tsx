import { Box, Icon, Link, Stack, StackProps, Text, VisuallyHidden, VStack } from '@chakra-ui/react';
import { ElementType } from 'react';
import { TbBrandGithub, TbBrandTwitter, TbHeart, TbMail, TbWorld } from 'react-icons/tb';

const SocialLink = ({ icon, href, label }: { icon: ElementType; href: string; label: string }) => (
  <Link
    display='inline-flex'
    alignItems='center'
    justifyContent='center'
    rounded='full'
    href={href}
    isExternal
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    <Icon as={icon} fontSize='xl' color='accent' />
  </Link>
);

export const Footer = (props: StackProps) => (
  <VStack as='footer' gap={2} my={12} textAlign='center' {...props}>
    <Text fontSize='sm'>
      Build with <Icon as={TbHeart} color='red.400' h={3} w={3} /> by idm1try
    </Text>

    <Stack isInline spacing='12px' pb={2}>
      <SocialLink icon={TbBrandGithub} href='https://github.com/idm1try' label='Github' />
      <SocialLink icon={TbWorld} href='https://idm1try.ru' label='Github' />
      <SocialLink icon={TbBrandTwitter} href='https://twitter.com/idm1try' label='Twitter' />
      <SocialLink icon={TbMail} href='mailto:admin@idm1try.ru' label='Mail' />
    </Stack>

    <Box
      as='a'
      href='https://nesteroff561.ru'
      fontSize='sm'
      fontWeight='semibold'
      bg='black'
      color='white'
      px='4'
      py='2'
      rounded='lg'
    >
      Deployed by nesteroff561
    </Box>
  </VStack>
);

export default Footer;
