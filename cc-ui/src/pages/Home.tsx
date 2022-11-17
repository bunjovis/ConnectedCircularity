import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Text,
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Divider,
  Spinner,
  Center,
  Button
} from '@chakra-ui/react';

import { ItemInfo } from '../types/ItemInfo';
import { useGetUserItemsQuery } from '../dbServiceApi';

const Home: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetUserItemsQuery();

  //refreshes the page when button is pushed
  const refreshPage = () => {
    window.location.reload();
  }

  if (isLoading) {
    return (
      <Center width='100%' p='5'>
        <Spinner size='xl' />
      </Center>
    );
  }
  console.log(data, error, isLoading);
  return (
    <Flex direction='column' gap='4' m='2' p='5' bg='#fff'>
      <Heading as='h1' size='md'>
        Purkukartoitus materiaalit
      </Heading>

      <HStack align='center' width='100%'>
        {error && (
          <Flex
          p='5'
          width='90%' 
          flexDirection='column'
          align='center'
          border='1px solid black'
          >
          <Text
            as='b'
            color='#EE0004'
            fontSize='2xl'
            textAlign='center'
            p='5'>
              Materiaalihaku ei onnistunut :(   
          </Text>
          <Button 
            type="submit" 
            colorScheme='blue'
            width='20wh'
            onClick={refreshPage}
              >yritä uudestaan</Button>
          </Flex>
        )}

        {data && !isLoading && (
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
                {data.map((item: ItemInfo) => {
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
