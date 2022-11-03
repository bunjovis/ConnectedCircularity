import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

import { 
    Heading,
    Stack,
    Select,
    Input,
    Button,
    Flex,
    FormLabel
} from "@chakra-ui/react"
 
export default function Login() {
    const navigate = useNavigate();

    //setters for authentication
    const [authUrl, setAuthUrl] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //setter for error message visibility 
    const [wrongCredState, setWrongCredState] = useState(false);
    
    //list of all service providers and authentication end points.
    const serviceProviders = [
        {
          id: 1,
          displayValue: 'Purkukartoitus',
          authEndpoint:
            'https://auth.purkukartoitus.fi/auth/realms/rapurc/protocol/openid-connect/token',
        },
      ];

    
    //Authentication to PK
    async function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        setWrongCredState(false);

        try {
            const response = axios.post(
                'https://auth.purkukartoitus.fi/auth/realms/rapurc/protocol/openid-connect/token',
                new URLSearchParams({
                    'client_id': 'management',
                    'grant_type': 'password',
                    'username': username,
                    'password': password
                })
            );
            console.log(response);
            if ((await response).status === 200) {
                setWrongCredState(false);
                navigate('/home');
              } else {
                throw new Error('login failed');
              }
            (await response).data.access_token;
        } catch (err) {
            setWrongCredState(true);
        }
    }

    return (
        <Flex
            flexDirection="column"
            width='100wh'
            height='100vh'
            backgroundColor="#E5E5E5"
            justifyContent="center"
            alignItems="center" 
            >
            <form
                name="login_credentials"
                onSubmit={handleSubmit}
                method="post"
                >
                <Stack
                    spacing={3}
                    p="3rem"
                    backgroundColor="#F6F6F6"
                    boxShadow="md">
                    
                    <Heading>Kirjaudu palveluun</Heading>
                
                    <FormLabel>Palveluntarjoaja</FormLabel>
                    <Select 
                        borderColor='#EE0004'
                        onChange={(e) => setAuthUrl(e.target.value)}>
                        {serviceProviders.map((provider) => (
                            <option key={provider.id} value={provider.authEndpoint}>
                            {provider.displayValue}
                            </option>
                    ))}
                    </Select>

                    <FormLabel>Käyttäjänimi</FormLabel>
                    <Input type='string' 
                        name='username'
                        borderColor='#EE0004' 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                        
                    <FormLabel>Salasana</FormLabel>
                    <Input type={'password'} 
                        name='password' 
                        borderColor='#EE0004' 
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <FormLabel 
                        id="wrongCred" 
                        color='#EE0004'
                        hidden={!wrongCredState}
                        >
                            Virheellinen käyttäjätunnus tai salasana.
                    </FormLabel>

                    <Button 
                        type="submit"
                        textTransform='uppercase'
                        colorScheme='blue'
                        >
                            Kirjaudu
                    </Button>
            </Stack>
        </form>
    </Flex>
    )
}
