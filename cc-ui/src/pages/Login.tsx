import React from 'react'
import { Route } from 'react-router-dom'

//import app from './../cc-pk-service/src/app'

import { 
    Heading,
    Container,
    ButtonGroup, 
    Select,
    chakra,
    Input,
    Button
} from "@chakra-ui/react"
import "@fontsource/montserrat"; 

const FormControl = chakra("form", {
    font: 'Montserrat'
})
 
const FormLabel = chakra("text", {
    baseStyle: {
        borderRadius: 'base',
        color: 'red'
    }
})

const Login = () => {
    return (
        <Container>
            <Heading>Kirjaudu palveluun</Heading>
            <FormControl>
                <FormLabel>Palveluntarjoaja</FormLabel>
                <Select borderColor='red' >
                    <option>Palveluntarjoaja</option>
                    <option>2.</option>
                </Select>

                <FormLabel>Käyttäjänimi</FormLabel>
                    <Input borderColor='red' type='text'/>

                <FormLabel>Salasana</FormLabel>
                    <Input borderColor='red' type={'password'} />

            </FormControl>
            <Button colorScheme='blue'>Kirjaudu</Button>
        </Container>
    )
}

export default Login

