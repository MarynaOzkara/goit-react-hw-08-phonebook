import { Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authorization/operations';
import { selectEmail } from 'redux/authorization/selectors';

const UserMenu = () => {
  const userEmail = useSelector(selectEmail);
  const dispatch = useDispatch();
  return (
    <Flex gap="20px" alignItems="center">
      <Text>Welcome, {userEmail}</Text>
      <Button size="xs" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Flex>
  );
};
export default UserMenu;
