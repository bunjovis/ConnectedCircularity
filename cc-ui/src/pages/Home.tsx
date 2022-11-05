import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Text,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  VStack,
  Divider,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { getUserItems } from '../api';

interface ItemInfo {
  reusableId: string;
  componentName: string;
  streetAddress: string;
  surveyId: string;
}

const Home: React.FC<{}> = () => {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    console.log('get from HOME');
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(
      'http://localhost:3000/v1/items/97541e5c-847f-41c2-8120-d9d93d0a4798',
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (typeof data === 'string') {
          setItems([]);
        } else {
          setItems(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Flex direction='column' gap='4' m='2' p='5' bg='#fff'>
      <Heading as='h1' size='md'>
        Purkukartoitus materiaalit
      </Heading>

      <HStack align='center' width='100%'>
        {isLoading && (
          <Center width='100%'>
            <Spinner size='xl' />
          </Center>
        )}
        {!isLoading && (
          <>
            <Box width='50%' height='100%'>
              <Text as='b'>Odottavat</Text>
              <VStack
                border='1px solid black'
                p='3'
                alignItems='start'
                minHeight='300px'
                bg='#f5f5f5'
              >
                {items.map((item: ItemInfo) => {
                  return (
                    <Box
                      bg='#fff'
                      width='100%'
                      border='1px solid black'
                      borderRadius='2px'
                      p='2'
                      cursor='pointer'
                      key={item.reusableId}
                      onClick={() => navigate(`/new_item/${item.reusableId}`)}
                    >
                      <Text as='b'>{item.streetAddress}</Text>
                      <Divider width='100%' />
                      <Text>{item.componentName}</Text>
                    </Box>
                  );
                })}
              </VStack>
            </Box>
            <Box width='50%' alignContent='start'>
              <Text as='b'>Käsitellyt</Text>
              <VStack
                border='1px solid black'
                p='3'
                alignItems='start'
                minHeight='300px'
                bg='#f5f5f5'
              ></VStack>
            </Box>
          </>
        )}
      </HStack>
    </Flex>
  );
};

export default Home;
