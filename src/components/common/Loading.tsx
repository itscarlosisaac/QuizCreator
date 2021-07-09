import { Spinner, Flex } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Flex justify="center" align="center" p="10">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  )
}
