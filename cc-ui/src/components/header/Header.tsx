import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { useAuth } from '../AuthProvider';

const Header: React.FC<{}> = () => {
  const { user, logout, mtLogin, mtAuth } = useAuth();

  return (
    <Flex alignItems='center' height='50px' p='1' bg='#fff'>
      <Box
        bg='#6C7185'
        color='#fff'
        p='2'
        borderRadius='10'
        width='40px'
        height='40px'
        as='button'
      >
        <Text as='b' textAlign='center' m='auto'>
          CC
        </Text>
      </Box>
      <Spacer />
      {!user && <Link to='/'>Kirjaudu</Link>}
      {user && (
        <>
          {!mtAuth && (
            <Box m='2' as='button' onClick={() => mtLogin()}>
              <Text as='b' casing='uppercase'>
                MT Login
              </Text>
            </Box>
          )}
          {mtAuth && (
            <Box m='2'>
              <Text as='b'>MT</Text>{' '}
              <CheckCircleIcon w={5} h={5} color='green.500' />
            </Box>
          )}
          <Box m='2' as='button' onClick={() => logout()}>
            <Text>Logout</Text>
          </Box>
        </>
      )}
    </Flex>
  );
};
export default Header;
