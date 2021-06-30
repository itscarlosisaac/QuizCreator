import { Box, Text,  Button, Heading, Divider, ButtonGroup, Flex  } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icons"
import { TrashIcon, PencilIcon } from "@heroicons/react/outline"

export const SingleQuest = () => {
  return (
    <>
      <Flex bg="white" shadow="md" p="3" borderRadius="4" justify="space-between" align="center" flexDir={["column", "row"]} mb="8">
        <Box>
          <Heading as="h3" size="md" >
            Form Title
          </Heading>
          <Divider w="20" orientation="horizontal" h="2" my="2"/>
          <Text> Form description goes in here </Text>
          <Text fontSize="sm" fontWeight="700" color="blue.300"> 25 Answers recorded. </Text>
        </Box>
        <ButtonGroup variant="outline" spacing="6" mr="4">
          <Button
            size="sm"
            colorScheme="linkedin"
            leftIcon={ <Icon as={PencilIcon} w={4} h={4} />}>Edit</Button>
          <Button
            size="sm"
            colorScheme="red"
            leftIcon={<Icon as={TrashIcon} w={4} h={4} />}
            >Delete</Button>
        </ButtonGroup>
      </Flex>
    </>
  )
}
