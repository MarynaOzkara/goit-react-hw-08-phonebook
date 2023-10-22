import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

const AuthNav = () => {
  return (
    <Flex gap="20px">
      <Link
        as={NavLink}
        textDecoration="none"
        p="2px 10px"
        borderRadius={4}
        _activeLink={{ bgColor: 'white', color: 'teal' }}
        _hover={{
          color: 'teal.900',
        }}
        to="/register"
      >
        Register
      </Link>
      <Link
        as={NavLink}
        textDecoration="none"
        p="2px 10px"
        borderRadius={4}
        _activeLink={{ bgColor: 'white', color: 'teal' }}
        _hover={{
          color: 'teal.900',
        }}
        to="/login"
      >
        Login
      </Link>
    </Flex>
  );
};
export default AuthNav;
