import { Input,  Flex, Textarea, Box } from "@chakra-ui/react"

export const BuilderHeader = () => {
  return (
    <>
     <Flex></Flex>
      <Flex mt="10">
        <Box p="8" bg="white" w="full" shadow="base" borderRadius="2">
          <Input fontSize="28px" size="lg" variant="flushed" placeholder="Untitled Form" isRequired />
          <Textarea fontSize="14px" mt="4" size="md" variant="flushed" placeholder="Form Description" isRequired resize="none" ></Textarea>
        </Box>
      </Flex> 
    </>
  )
}
