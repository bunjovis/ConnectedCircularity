import React from 'react'
import {useState} from 'react'
import { Route, Router } from 'react-router-dom'

//import app from '../../cc-pk-service/src'

import { 
    Heading,
    Stack,
    Link,
    ButtonGroup, 
    Select,
    chakra,
    Input,
    Button,
    ChakraProvider,
    extendTheme,
    Flex,
    TagLeftIcon,
    useControllableProp, 
    useControllableState
} from "@chakra-ui/react"
import "@fontsource/montserrat"; 

const FormControl = chakra("form", {
    font: 'Montserrat'
})
 
const FormLabel = chakra("text", {
    baseStyle: {
        float: 'left',
        borderRadius: 'base',
        color: '#EE0004'
    }
})

function Login() {
    type State = {
        username: string,
        password: string,
        message: string,
        token: string
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        console.log(event.currentTarget.elements);
        console.log(event.currentTarget.elements[0]);
        //token = app.getToken(username, password);

    };

    return (
        <Flex
            flexDirection="column"
            //TO DO: width and height to full page
            width='100wh'
            height='100vh'
            backgroundColor="#E5E5E5"
            justifyContent="center"
            alignItems="center" 
            >
            <form
                method="post"
                name="login_credentials"
                onSubmit={handleSubmit}>
                <Stack
                    spacing={3}
                    p="3rem"
                    backgroundColor="#F6F6F6"
                    boxShadow="md">
                    
                    <Heading>Kirjaudu palveluun</Heading>
                
                    <FormLabel>Palveluntarjoaja</FormLabel>
                    <Select borderColor='#EE0004' >
                        <option>Palveluntarjoaja</option>
                    </Select>

                    <FormLabel>Käyttäjänimi</FormLabel>
                    <Input name='username' borderColor='#EE0004' type='text'/>

                    <FormLabel>Salasana</FormLabel>
                    <Input name='password' borderColor='#EE0004' type={'password'} />
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

export default Login

