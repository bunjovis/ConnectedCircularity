import React from 'react'
import { Flex } from "@chakra-ui/react"
import Header from "../header/Header"

export default function LandingLayout() {
    return (
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
      >
        <Header/>
      </Flex>
    )
  }