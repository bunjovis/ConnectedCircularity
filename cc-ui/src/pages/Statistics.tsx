import React, {useState, useEffect} from 'react';
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
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import DoubleBarChart from '../components/charts/DoubleBarChart';
import { getUserCount, getPKRequests, getMTRequests } from '../api';

const Statistics: React.FC<{}> = () => {
  const [userCount, setUserCount] = useState<number>(-1);
  const [userCountDaily, setUserCountDaily] = useState<[null]>([null]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [pkSuccess, setPkSuccess] = useState<number>(-1);
  const [pkCountDaily, setPkCountDaily] = useState<[null]>([null]);
  const [mtSuccess, setMtSuccess] = useState<number>(-1);
  const [mtFailure, setMtFailure] = useState<number>(-1);
  const [mtCount, setMtCount] = useState<number>(-1);
  const [mtCountDaily, setMtCountDaily] = useState<[null]>([null]);

  async function fetchUserData() {
    const userData: any = await getUserCount();
      if (await userData.status === 200) {
        setUserCount(userData.count.count);
        let dailyArray = userData.count.daily;
        const sortedDaily = dailyArray.sort((a:any, b:any) => a.date < b.date ? 1 : -1).slice(0, 7);
        setUserCountDaily(sortedDaily);
      }
  }

  async function fetchPKData() {
    const pkData: any = await getPKRequests();
      if (await pkData.status === 200) {
        setPkSuccess(pkData.count.successCount);
        let dailyArray = pkData.count.daily;
        const sortedDaily = dailyArray.sort((a:any, b:any) => a.date < b.date ? 1 : -1).slice(0, 7);
        setPkCountDaily(sortedDaily);
      }
  }

  async function fetchMTData() {
    const mtData: any = await getMTRequests();
      if (await mtData.status === 200) {
        setMtSuccess(mtData.count.successCount);
        setMtFailure(mtData.count.failureCount);
        const total:number = parseInt(mtData.count.successCount);
        setMtCount(total);
        let dailyArray = mtData.count.daily;
        const sortedDaily = dailyArray.sort((a:any, b:any) => a.date < b.date ? 1 : -1).slice(0, 7);
        setMtCountDaily(sortedDaily);
      }
  }

  useEffect(() => {
    if (userCount === -1) {
      fetchUserData();
      fetchPKData();
      fetchMTData();
    }
    if (userCount !== -1 && userCountDaily[0] !== null) setLoading(false);
  }, [userCount]);

  if (isLoading) {
    return (
      <Center width='100%' p='5'>
        <Spinner size='xl' />
      </Center>
    );
  }

  return (
    <VStack width="100%" spacing='40px' marginBottom="40px">
    {pkSuccess !== -1 && !isLoading &&
    <Flex alignItems='center' width="100%" justifyContent='center' marginTop="40px" height= "300px">
      <Center width='42%' bg="#ffffff" height="100%" borderRadius='50' marginLeft="10px" marginRight="14px">
        <VStack width='100%'>
          <Text fontSize='2xl'>Purkukartoitus: kaikki</Text>
          <Text fontSize='2xl'>uniikit materiaalit</Text>
          <Text fontSize='5xl'>{pkSuccess}</Text>
        </VStack>
      </Center>
      <Box width='50%' marginRight='10px' height= "300px">
        <BarChart dailyRequests={pkCountDaily}></BarChart>
      </Box>
    </Flex>
    }
    {mtSuccess !== -1 && !isLoading &&
      <Flex marginTop="60px" alignItems='center' width="100%" justifyContent='center'height= "300px">
        <Center width='42%' bg="#ffffff" height="100%" borderRadius='50' marginLeft="10px" marginRight="14px">
          <VStack width='100%'>
            <Text fontSize='2xl'>Materiaalitori: kaikki</Text>
            <Text fontSize='2xl'>onnistuneesti</Text>
            <Text fontSize='2xl'>luodut ilmoitukset</Text>
            <Text fontSize='5xl'>{mtCount}</Text>
          </VStack>
        </Center>
        <Box width='50%' marginRight='10px' height= "300px">
          <DoubleBarChart dailyRequests={mtCountDaily}></DoubleBarChart>
        </Box>
      </Flex>
    }
    {mtSuccess !== -1 && !isLoading && (mtSuccess > 0 || mtFailure > 0) &&
      <Flex marginTop="60px" alignItems='center' width="100%" justifyContent='center'height= "300px">
        <Box width='300px' height= "300px">
          <PieChart success={mtSuccess} failure={mtFailure}></PieChart>
        </Box>
      </Flex>
    }
    <Flex marginTop="60px" alignItems='center' width="100%" justifyContent='center'height= "300px">
      <Center width='42%' bg="#ffffff" height="100%" borderRadius='50' marginLeft="10px" marginRight="14px">
      {userCount !== -1 && !isLoading &&
        <VStack width='100%'>
        <Text fontSize='2xl'>Connected Circularity</Text>
        <Text fontSize='2xl'>käyttäjämäärä</Text>
        <Text fontSize='5xl'>{userCount}</Text>
      </VStack>
      }
      </Center>
      {userCount !== -1 && !isLoading && userCountDaily[0] !== null &&
        <Box width='50%' marginRight='10px' height= "300px">
          <LineChart count={userCount} dailyUsers={userCountDaily}></LineChart>
        </Box>
      }
    </Flex>
    </VStack>
  )
}

export default Statistics;