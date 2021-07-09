import {
  FormControl,
  Input,
  Button,
  Box,
  HStack,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

import { CloseIcon } from '@chakra-ui/icons'
import { FC } from 'react'
import { useForm } from "../../../hooks/useForm";

export const MultipleChoice: FC<any> = ({
  setQuestion,
  questionData,
  handleOptions,
}) => {

  const { add, update, remove } = handleOptions;


  const { id, question, options } = questionData

  const editOption = (event: React.FormEvent): void => {
    const optionId = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    update(id, optionId,  value)
  }

  const deleteOption = (optionId: string): void => {
    remove(id, optionId);
  }
  const addOption = (): void => {
    add(id);
  }

  const handleChangeQuestion = (event: React.FormEvent) => {
    const Target = event.target as HTMLInputElement;
    setQuestion(Target.value);
  }

  return (
    <>
      <FormControl mb="8" id={id}>
        <Input
          value={question}
          onChange={handleChangeQuestion}
          fontSize="xl"
          variant="flushed"
          placeholder="Question ?"
          isRequired />
      </FormControl>
      { options && 
        options.map((option: any, index: number) => {
            return (
              <HStack mb="4" key={option.id}>
                <InputGroup size="md">
                  <Input
                    name={option.id}
                    onChange={editOption}
                    value={option.value}
                    isRequired
                    pr="4.5rem"
                    variant="outline" placeholder={`Answer ${index + 1}`} 
                  />
                  <InputRightElement width="2rem" mr="0.4rem">
                    {
                      questionData.options!.length > 2 &&
                        <Button
                        bg="red.400"
                        h="1.75rem"
                        size="sm"
                        onClick={() => deleteOption(option.id)}>
                          <CloseIcon h={2} w={2} color="white"/>
                        </Button>
                    }
                  </InputRightElement>
                </InputGroup>
              </HStack>
            )
          }
        )
      }
    
      <Box mt="6">
        <Button
          onClick={addOption}
          width="100px"
          size="sm"
          colorScheme="linkedin"
          variant="outline">Add Option</Button>
      </Box>
    </>
  )
}
