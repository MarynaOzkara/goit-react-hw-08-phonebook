import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import { Flex } from '@chakra-ui/react';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authorization/selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Flex
      align="center"
      justify="space-between"
      bgColor="teal"
      color="white"
      p="10px 20px"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
export default AppBar;
