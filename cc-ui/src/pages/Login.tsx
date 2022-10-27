import React from 'react'
import {useState} from 'react'
import { Navigate, Route, Router, useNavigate } from 'react-router-dom'

//import App from '../../../cc-pk-service/src/App'
import Home from './Home'
import Header from '../components/header/Header'

import { 
    Heading,
    Stack,
    Select,
    chakra,
    Input,
    Button,
    Flex,
    FormLabel
} from "@chakra-ui/react"
 
/*
const FormLabel = chakra("text", {
    baseStyle: {
        float: 'left',
        borderRadius: 'base',
        color: '#EE0004'
    }
})
*/
export default function Login() {
    const [username] = useState("");
    const [password] = useState("");
    
    function validateForm() {
        console.log(username)

        return username.length > 0 && password.length > 0;
    }
    
    function handleSubmit(event: { preventDefault: () => void }) {
        event.preventDefault();
        //let token = App.getToken(username, password)
    }
    
    return (
        <>
        <Header></Header>
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
                    <Select borderColor='#EE0004' >
                        <option>Palveluntarjoaja</option>
                    </Select>

                    <FormLabel>Käyttäjänimi</FormLabel>
                    <Input type='string' 
                        name='username'
                        borderColor='#EE0004' 
                    />
                     
                    <FormLabel>Salasana</FormLabel>
                    <Input type={'password'} 
                        name='password' 
                        borderColor='#EE0004' 
                    />

                    <Button 
                        type="submit"
                        textTransform='uppercase'
                        colorScheme='blue'
                        //disabled={!validateForm()}
                        >
                            Kirjaudu
                    </Button>
                </Stack>
            </form>
        </Flex>
        </>
    )
}
