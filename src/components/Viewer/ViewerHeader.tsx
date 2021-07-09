import { FC } from 'react';
import { Text, Heading, Flex, Box } from "@chakra-ui/react";

interface IProps {
  meta: any
}

export const ViewerHeader:FC<IProps>   = ({meta}) => {
  return (
    <>
      <Flex></Flex>
      <Flex mt="10">
        <Box p="8" bg="white" w="full" shadow="base" borderRadius="2">
          <Heading as="h3" fontSize="2xl" mb="2">{meta.title}</Heading>
          <Text>{meta.description} </Text>
        </Box>
      </Flex> 
    </>
  )
}


