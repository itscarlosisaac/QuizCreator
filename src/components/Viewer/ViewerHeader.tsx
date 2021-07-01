import { Text, Heading, Flex, Box } from "@chakra-ui/react";

export const ViewerHeader = () => {
  return (
    <>
      <Flex></Flex>
      <Flex mt="10">
        <Box p="8" bg="white" w="full" shadow="base" borderRadius="2">
          <Heading as="h3" fontSize="2xl" mb="2">Form Title goes here</Heading>
          <Text>Form Description </Text>
        </Box>
      </Flex> 
    </>
  )
}


