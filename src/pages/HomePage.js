import React from 'react';
import { Box, Heading, Icon, Link, Text } from '@chakra-ui/react';
import { FaAddressBook } from 'react-icons/fa';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box w="500px" mt="50px" textAlign="center">
      <Heading as="h1" size="xl">
        PhoneBook
      </Heading>
      <Text mt="30px" fontSize={24}>
        Welcome to Phone Book App!
      </Text>

      <Text mt="30px" fontSize={20}>
        To create your contacts Phonebook
      </Text>
      <Icon color="teal" as={FaAddressBook} mt="20px" w="100px" h="100px" />
      <Text mt="20px" fontSize={20}>
        <ChakraLink
          as={ReactRouterLink}
          color="teal.700"
          fontWeight="bold"
          to="/register"
        >
          register
        </ChakraLink>{' '}
        or{' '}
        <Link
          as={ReactRouterLink}
          color="teal.700"
          fontWeight="bold"
          to="/login"
        >
          login
        </Link>
      </Text>
    </Box>
  );
};
export default HomePage;
