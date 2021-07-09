import {FC} from 'react'
import {
  FormControl,
  Text,
  Flex,
  Select,
  Box,
  Divider,
  Checkbox,
  Button,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
interface IProps {
  questions: any[]
}

export const ViewerForm: FC<IProps> = ({questions}) => {
  
  console.log(questions);

  return (
    <Flex flexDir="column">
      {
        questions.map((question, index) => (
          <Flex flexDir="column" bg="white" w="full" shadow="base" borderRadius="2" p="8" mt="6" key={question.id}>
            <Text as="p" fontSize="sm" fontWeight="800" color="gray.300">{ index + 1}. Question</Text>
            <Text mb="4" as="p">{question.question}</Text>
            {
              question.options && question.options.length > 0 &&
              <>
                <Text as="h4" fontWeight="600">Options</Text>
                <UnorderedList as="ul" ml="10">
                  {question.options.map((option: any) => <ListItem key={option.id}>{option.value}</ListItem> )}
                </UnorderedList>
              </>
            }
            {
              question.isRequired &&
              <Text color="red" as="small" fontStyle="italic">required</Text>
            }
          </Flex>
        ))
      }
    </Flex>
  )
}
