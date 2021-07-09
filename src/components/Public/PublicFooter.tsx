import { FC } from 'react'
import { Heading, Input, Flex, Button, Box, Text, FormControl, } from "@chakra-ui/react"
import { Icon  } from "@chakra-ui/icons"
import { PaperAirplaneIcon }from "@heroicons/react/outline"

interface IProps {
  handleChange: any
}

export const PublicFooter: FC<IProps> = ({handleChange}) => {
  return (
    <>
      <Box mt="8" bg="white" w="full" shadow="base" borderRadius="2" p="8" mb="6">
        <Heading size="md">Email address</Heading>
        <Text as="small">In order to save your answers we need your email address.</Text>
        <FormControl onChange={handleChange} mt="8" isRequired>
          <Input name="email" variant="filled" type="email" placeholder="Email address" maxW="300px" />
        </FormControl>
      </Box>
      <Flex justify="space-between" align="center" py="6">
        <Button
          type="submit"
          rightIcon={<Icon as={PaperAirplaneIcon} h={4} w={4} />} 
          size="md"
          colorScheme="green"
          variant="solid" >
          Submit
        </Button>
      </Flex>
    </>
  )
}
