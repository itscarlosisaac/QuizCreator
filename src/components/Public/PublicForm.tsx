import {FC} from 'react'
import {
  Flex,
} from "@chakra-ui/react";
import { MultipleQuestion } from './MultipleQuestion';
import { SimpleQuestion } from './SimpleQuestion';

interface IProps {
  questions: any[],
  handleChange: any
}

export const PublicForm: FC<IProps> = ({
  questions,
  handleChange,
}) => {

  return (
    <Flex flexDir="column">
      {
        questions.length > 0 && 
        questions.map((question) => (
          <Flex flexDir="column" bg="white" w="full" shadow="base" borderRadius="2" p="8" mt="6" key={question.id}>
            {
              question.questionType !== "Multiple" ? 
                <SimpleQuestion 
                  handleChange={handleChange}
                  question={question.question} 
                  questionId={question.id} 
                  questionRequired={question.isRequired} /> :
                <MultipleQuestion
                  handleChange={handleChange}
                  question={question.question}
                  questionId={question.id}
                  questionRequired={question.isRequired}
                  options={question.options} />
                
            }
          </Flex>
        ))
      }
    </Flex>
  )
}
