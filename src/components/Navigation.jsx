import { NavLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <>
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
          to="/"
        >
          Home
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
          to="/contacts"
        >
          Contacts
        </Link>
      </Flex>
    </>
  );
};
export default Navigation;
