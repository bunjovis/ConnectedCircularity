import React from 'react';
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
} from '@chakra-ui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';



const Statistics: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <VStack width="100%" spacing='40px' marginBottom="40px">
    <Flex alignItems='center' width="100%" justifyContent='center' marginTop="40px" height= "300px">
      <Center width='42%' bg="#ffffff" height="100%" borderRadius='50' marginLeft="10px" marginRight="14px">
      <VStack width='100%'>
        <Text fontSize='2xl'>Materiaalitori: luodut</Text>
        <Text fontSize='2xl'>ilmoitukset</Text>
        <Text fontSize='5xl'>103</Text>
      </VStack>
      </Center>
      <Box width='50%' marginRight='10px' height= "300px">
        <BarChart></BarChart>
      </Box>
    </Flex>
    <Flex alignItems='center' width="93%" height= "90px">
      <Center justifyContent='space-evenly' width="100%" bg="#ffffff" height="100%" borderRadius='30'>
        <Text fontSize='2xl'>Purkukartoitus: Haetut materiaalit</Text>
        <Text fontSize='4xl'>77</Text>
        <Box fontWeight="bold" bg="#b2d6d3" height="40px" width="200px" textAlign="center" borderRadius='10' as="button" onClick={() => navigate(`/item_stats`)}>Materiaalien tiedot</Box>
      </Center>
    </Flex>
    <Flex marginTop="60px" alignItems='center' width="100%" justifyContent='center'height= "300px">
      <Center width='42%' bg="#ffffff" height="100%" borderRadius='50' marginLeft="10px" marginRight="14px">
      <VStack width='100%'>
        <Text fontSize='2xl'>Connected Circularity</Text>
        <Text fontSize='2xl'>käyttäjämäärä</Text>
        <Text fontSize='5xl'>19</Text>
      </VStack>
      </Center>
      <Box width='50%' marginRight='10px' height= "300px">
        <LineChart></LineChart>
      </Box>
    </Flex>
    </VStack>
  )
}

export default Statistics;