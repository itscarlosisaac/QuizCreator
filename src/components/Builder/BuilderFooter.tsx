import { Container, Input,  Flex, Textarea, SelectField, Select, Button, ButtonGroup, Box, Tooltip, Text, Divider  } from "@chakra-ui/react"
import { PlusSquareIcon } from "@chakra-ui/icons"

export const BuilderFooter = () => {
  return (
    <>
      <Flex justify="center" align="center" py="6">
        <Tooltip label="Add Question" aria-label="Add Question">
          <Button variant="outline" colorScheme="linkedin" borderRadius="100px" w={16} h={16}>
            <PlusSquareIcon h="6" w="6"/>
          </Button>
        </Tooltip>
      </Flex>
      <Flex justify="space-between" align="center" py="6">
        <Button
          colorScheme="green"
          variant="solid" >
          Save Form
        </Button>
        <Box>
          <Text as="p">
            Share:
            <Text ml="2" as="small" p="2" bg="white">
              URL GOES HERE
            </Text>
          </Text>
        </Box>
      </Flex>
    </>
  )
}
