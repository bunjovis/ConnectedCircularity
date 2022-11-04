import { Link } from 'react-router-dom';
import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { useAuth } from '../../context/AuthProvider';

/**
 * import logo!
 */

const Header: React.FC<{}> = () => {
  const { user, logout, mtLogin } = useAuth();
  return (
    <header className='header-wrapper'>
      <Flex alignItems='center' height='50px'>
        <h1>Connected Circularity</h1>
        <Spacer />
        {!user && <Link to='/'>Kirjaudu</Link>}
        {!user && (
          <>
            <Box onClick={() => logout()}>
              <Button>MT Login</Button>
            </Box>
            <Box onClick={() => mtLogin()}>
              <Button>Logout</Button>
            </Box>
          </>
        )}
      </Flex>
    </header>
  );
};
export default Header;
