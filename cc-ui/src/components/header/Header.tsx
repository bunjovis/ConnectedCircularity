import { Link } from 'react-router-dom';
import { Flex, Spacer } from '@chakra-ui/react';

//import Login from '../../pages/Login';

/**
 * import logo!
 */

const Header: React.FC<{}> = () => {
  return (
    <header className='header-wrapper'>
      <Flex alignItems='center'>
        <h1>Connected Circularity</h1>
        <Spacer />
        <Link to='/'>Kirjaudu</Link>
      </Flex>
    </header>
  );
};
export default Header;
