import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
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
  Button,
  Select
} from '@chakra-ui/react';

import { ItemInfo } from '../types/ItemInfo';
import { useGetUserItemsQuery } from '../dbServiceApi';
import { useAuth } from '../components/AuthProvider';
import { skipToken } from '@reduxjs/toolkit/dist/query';

const Home: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { userId } = useAuth();

  const { data, error, isLoading, refetch } = useGetUserItemsQuery(
    userId ?? skipToken
  );

  useEffect(() => {
    if (userId) {
      initRefetch();
    }
  }, [userId]);

  const initRefetch = () => {
    refetch();
  };

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

  return (
    <Flex direction='column' gap='4' m='2' p='5' bg='#fff'>
      <Heading as='h1' size='md'>
        Purkukartoitus materiaalit
      </Heading>

      <HStack align='center' width='100%'>
        //Catches error if fetching items from Materiaalitori fails
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

        //TODO: status näkymä
        {data && !isLoading && (
          <>
            <Box width='50%' height='100%'>
              <VStack
                  border='1px solid black'
                  p='3'
                  alignItems='start'
                  minHeight='300px'
                  bg='#E9E9E9'
                >
                <Box 
                  bg='#fff'
                  width='100%'
                  borderRadius='2px'
                  p='2'
                  >
                  <Heading as='b'>Odottavat</Heading>

                  <Divider width='100%'/>
                
                  <Select placeholder='Status' p='2'>
                    //TODO: lisää status vaihtoehdot!!!
                    //TODO: miten statusvaihtoehdot vaikuttaa hakutuloksiin
                    <option value='option1'>option 1</option>
                  </Select>
                </Box> 

                {data.map((item: ItemInfo) => {
                  return (
                    <Box
                      bg='#fff'
                      width='100%'
                      border='1px solid black'
                      borderRadius='2px'
                      boxShadow='md'
                      p='2'
                      cursor='pointer'
                      key={item.reusableId}
                      rounded='5'   
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
              <VStack
                border='1px solid black'
                p='3'
                alignItems='start'
                minHeight='300px'
                bg='#E9E9E9'
              >
                <Box
                  bg='#fff'
                  width='100%'
                  borderRadius='2px'
                  p='2'
                  >
                  <Heading as='b'>Käsitellyt</Heading>
              
                </Box>
                <Box
                      bg='#fff'
                      width='100%'
                      border='1px solid black'
                      borderRadius='2px'
                      boxShadow='md'
                      p='2'
                      cursor='pointer' 
                      rounded='5'                    
                    >
                      <Text as='b'>Ei Materiaalitoriin lähetettyjä materiaaleja</Text>
                      <Divider width='100%' />
                      <Text>Lähetä 'Odottava' ilmoitus käsitelläksesi materiaali</Text>
                    </Box>
                //TODO: käsitellyt itemit käsiteltyihin
              </VStack>
            </Box>
          </>
        )}
      </HStack>
    </Flex>
  );
};

export default Home;
