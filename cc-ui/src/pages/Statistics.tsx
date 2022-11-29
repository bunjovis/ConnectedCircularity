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
import DoubleBarChart from '../components/charts/DoubleBarChart';



const Statistics: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <VStack width="100%" spacing='40px' marginBottom="40px">
    <Flex alignItems='center' width="100%" justifyContent='center' marginTop="40px" height= "300px">
      <Center width='42%' bg="#ffffff" height="100%" borderRadius='50' marginLeft="10px" marginRight="14px">
      <VStack width='100%'>
        <Text fontSize='2xl'>Purkukartoitus: kaikki</Text>
        <Text fontSize='2xl'>uniikit materiaalit</Text>
        <Text fontSize='5xl'>103</Text>
      </VStack>
      </Center>
      <Box width='50%' marginRight='10px' height= "300px">
        <BarChart></BarChart>
      </Box>
    </Flex>
    <Flex marginTop="60px" alignItems='center' width="100%" justifyContent='center'height= "300px">
      <Center width='42%' bg="#ffffff" height="100%" borderRadius='50' marginLeft="10px" marginRight="14px">
      <VStack width='100%'>
        <Text fontSize='2xl'>Materiaalitori: kaikki</Text>
        <Text fontSize='2xl'>luodut ilmoitukset</Text>
        <Text fontSize='5xl'>73</Text>
      </VStack>
      </Center>
      <Box width='50%' marginRight='10px' height= "300px">
        <DoubleBarChart></DoubleBarChart>
      </Box>
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