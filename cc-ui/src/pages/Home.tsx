import { useNavigate } from 'react-router-dom';
import { Button, Flex, Heading } from '@chakra-ui/react';

const Home: React.FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Flex direction='column' align='center' gap='4' m='2' p='5' bg='#fff'>
      <Heading as='h1' size='md'>
        Welcome to Connected Circularity
      </Heading>
      <Button width='50%' onClick={() => navigate('/new_item/123123123')}>
        To form
      </Button>
    </Flex>
  );
};

export default Home;
