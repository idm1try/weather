import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box textAlign='center' color='gray.500' fontSize='sm' mt={5}>
      &copy; {new Date().getFullYear()} <b>idm1try</b>
    </Box>
  );
};

export default Footer;
