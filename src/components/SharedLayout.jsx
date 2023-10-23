import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const SharedLayout = () => {
  return (
    <Box maxW="1200px" ml="auto" mr="auto">
      <AppBar />
      <Box w="500px" ml="auto" mr="auto" p={[30, 15]}>
        <Outlet />
      </Box>
    </Box>
  );
};
export default SharedLayout;
