import { Flex } from '@chakra-ui/react';
import Header from '../header/Header';

const LandingLayout: React.FC<{}> = () => {
  return (
    <Flex direction='column' align='center' maxW={{ xl: '1200px' }} m='0 auto'>
      <Header />
    </Flex>
  );
};

export default LandingLayout;
