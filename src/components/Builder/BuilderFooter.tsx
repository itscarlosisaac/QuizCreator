import { FC } from 'react'
import { Flex, Button, Box, Tooltip, Text } from "@chakra-ui/react"
import { PlusSquareIcon } from "@chakra-ui/icons"

interface IProps {
  saving: boolean,
  addQuestion: () => void
  publicUrl: string
}

export const BuilderFooter: FC<IProps> = ({
  saving,
  addQuestion,
  publicUrl
}) => {
  return (
    <>
      <Flex justify="center" align="center" py="6">
        <Tooltip label="Add Question" aria-label="Add Question">
          <Button
            onClick={addQuestion}
            variant="outline"
            colorScheme="linkedin"
            borderRadius="100px"
            w={16}
            h={16}>
            <PlusSquareIcon h="6" w="6"/>
          </Button>
        </Tooltip>
      </Flex>
      <Flex justify="space-between" align="center" py="6">
        <Button
          isLoading={saving}
          type="submit"
          colorScheme="green"
          variant="solid" >
          Save Form
        </Button>
        <Box>
          <Text as="p">
            Share:
            <Text ml="2" as="small" p="2" bg="white">
              {publicUrl}
            </Text>
          </Text>
        </Box>
      </Flex>
    </>
  )
}
