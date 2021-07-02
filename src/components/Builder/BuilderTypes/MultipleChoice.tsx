import {
  FormControl,
  Input,
  Button,
  Box,
  RadioGroup,
  Radio,
  HStack,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'
import { FC, useState } from 'react'
import { uuid } from 'uuidv4';
interface IProps {
  id: string,
  isRequired?: boolean
}

interface Option {
  id: string,
}

export const MultipleChoice: FC<IProps> = (props) => {
  const [state, setState] = useState<Option[]>([
    { id: uuid() },
    { id: uuid() }
  ])

  const addOption = (): void => {
    setState((prev) => [
      ...prev,
      { id:uuid(),  type: "Multiple" }
    ])
  }

  const deleteOption = (id: string): void => {
    setState((prev) => prev.filter(question => question.id !== id));
  }

  return (
    <>
      <FormControl mb="8" id={props.id}>
        <Input  fontSize="xl" variant="flushed" placeholder="Question ?" isRequired />
      </FormControl>
      {
        state.map((option, index) => {
            return (
              <HStack mb="4" key={option.id}>
                <InputGroup size="md">
                  <Input
                    isRequired
                    pr="4.5rem"
                    variant="outline" placeholder={`Answer ${index + 1}`} 
                  />
                  <InputRightElement width="2rem" mr="0.4rem">
                    {
                      state.length > 2 &&
                        <Button bg="red.400" h="1.75rem"size="sm" onClick={() => deleteOption(option.id)}>
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
