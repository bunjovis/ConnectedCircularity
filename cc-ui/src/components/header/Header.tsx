import React from "react"
import { Link } from "react-router-dom"
import { Box, Flex, Text, Button, Stack, Spacer } from "@chakra-ui/react"

import Login from '../../pages/Login'

/**
 * import logo!
 */
  
const Header = () => {
  return (
    <header className="header-wrapper">
      <Flex
        alignItems="center">
        <Spacer />
        <Link to="/">Kirjaudu</Link>
      </Flex>
    </header>
  )
}
export default Header
  