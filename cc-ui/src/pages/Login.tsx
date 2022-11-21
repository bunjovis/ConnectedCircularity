/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';
import { getServiceProviders } from '../api';

import {
  Heading,
  Stack,
  Select,
  Input,
  Button,
  Flex,
  FormLabel,
} from '@chakra-ui/react';

// eslint-disable-next-line max-lines-per-function
const Login: React.FC<{}> = () => {
  const { user, login, error, loading } = useAuth();

  //setters for authentication
  const [serviceProviders, setServiceProviders] = useState<[]>([]);
  const [authUrl, setAuthUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loadServiceProviders = async () => {
    const data: any = await getServiceProviders();
    console.log(data);
    if (data.status === 200) {
      setServiceProviders(data.providers);
    }
  };

  useEffect(() => {
    loadServiceProviders();
  }, []);

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    const loginData = {
      username,
      password,
      authUrl,
    };
    await login(loginData);
  }

  if (user) {
    return <Navigate to='/home' />;
  }
  return (
    <Flex
      flexDirection='column'
      width='100%'
      height='100vh'
      backgroundColor='#E5E5E5'
      justifyContent='center'
      alignItems='center'
    >
      <form name='login_credentials' onSubmit={handleSubmit} method='post'>
        <Stack spacing={3} p='3rem' backgroundColor='#F6F6F6' boxShadow='md'>
          <Heading>Kirjaudu palveluun</Heading>
          <Select
            borderColor='#EE0004'
            onChange={(e) => setAuthUrl(e.target.value)}
            placeholder='Palveluntarjoaja'
          >
            {serviceProviders.map((provider: any) => (
              <option key={provider.id} value={provider.id}>
                {provider.name}
              </option>
            ))}
          </Select>

          <FormLabel>Käyttäjänimi</FormLabel>
          <Input
            type='string'
            name='username'
            borderColor='#EE0004'
            onChange={(e) => setUsername(e.target.value)}
          />

          <FormLabel>Salasana</FormLabel>
          <Input
            type={'password'}
            name='password'
            borderColor='#EE0004'
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <FormLabel id='wrongCred' color='#EE0004'>
              Virheellinen käyttäjätunnus tai salasana.
            </FormLabel>
          )}
          <Button
            type='submit'
            textTransform='uppercase'
            colorScheme='blue'
            disabled={loading}
          >
            Kirjaudu
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};

export default Login;
