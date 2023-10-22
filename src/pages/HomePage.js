import { Box, Heading, Link, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box>
      <Heading as="h1" size="xl">
        PhoneBook
      </Heading>
      <Text>Welcome to Phone Book App!</Text>
      <Text>
        To create your contacts Phonebook first <Link>register</Link> or{' '}
        <Link>login</Link>
      </Text>
    </Box>
  );
};
export default HomePage;
