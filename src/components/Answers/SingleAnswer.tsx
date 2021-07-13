import { Text, ListItem, Box } from '@chakra-ui/react'
import { FC } from 'react'


interface IProps{
  data: any
}

export const SingleAnswer: FC<IProps> = ({ data }) => {
  console.log("ME", data)
  return (
    <ListItem p={8} bg="white" shadow="sm" mt="10">

      <Text as="h2" mb="6">
        <Text as="strong">User: </Text>
        {data.meta.user}
      </Text>
      {
        data.data.map((question:any) => {
          return (
            <Box mb={4} key={question.question}>
              <Text color="orange.400">
                <Text as="strong" mr="2">Q:</Text>
                <Text as="span" >{question.question}</Text>
              </Text>
              <Text color="blue.300">
                <Text as="strong" mr="2">A:</Text>
                <Text as="span">{question.answer}</Text>
              </Text>
            </Box>
          )
        })
      }
      </ListItem>
  )
}
