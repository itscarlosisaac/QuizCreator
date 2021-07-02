import React from 'react'
import {
  Spinner,
  Flex
} from '@chakra-ui/react';


export const LoadingScreen = () => {
  return (
    <>
      <Flex minW="100vw" minH="100vh" bg="gray.100"  justify="center" align="center">
          <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />    
      </Flex>
    </>
  )
}
