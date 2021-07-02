import {
  Flex,
  Select,
  Box,
  Divider,
  Checkbox,
  Button
} from "@chakra-ui/react";
import { FC } from 'react';
import { uuid } from 'uuidv4';
import { Icon } from '@chakra-ui/icons'
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";

import { MultipleChoice } from "./BuilderTypes/MultipleChoice";
import { ShortQuestion } from "./BuilderTypes/ShortQuestion";
import { LongQuestion } from "./BuilderTypes/LongQuestion";

type QuestionTypes = "Short" | "Long" | "Multiple";

interface IProps {
  id: string,
  deleteQuestion: (id: string) => void
}

export const Question: FC <IProps> = (props) => {

  const [questionType, setQuestionType] = useState<QuestionTypes>("Multiple");
  const [isQuestionRequired, setIsQuestionRequired] = useState<Boolean>(true);
  
  const handleSelectChange = (event: React.FormEvent) => {
    const target = event.target as HTMLSelectElement
    setQuestionType(target.value as QuestionTypes);
  }
  const handleRequiredChange = (event: React.FormEvent) => {
    setIsQuestionRequired(!isQuestionRequired)
  }

  const handleSelectQuestionType = () => {
    switch (questionType) {
      case "Short":
        return <ShortQuestion  id={uuid()} />;
      case "Long":
        return <LongQuestion id={uuid()} />;
      default:
        return <MultipleChoice id={uuid()} />
    }
  }

  return (
    <>
      <Box bg="white" w="full" shadow="base" borderRadius="2" p="8" mb="6">
        <Flex justify="space-between" flexDir="row">
          <Flex w="80%" flexDir="column">
            { handleSelectQuestionType() }
          </Flex>
          <Flex flexDir="column" justify="space-between">
            <Select onChange={handleSelectChange}>
              <option value="Multiple">Multiple Choice</option>
              <option value="Short">Short Question</option>
              <option value="Long">Long Question</option>
            </Select>
            <Flex flexDir="row" justify="space-between" align="center" maxW="150px">
              <Button h="10" w="10" onClick={()=>props.deleteQuestion(props.id)}>
                <Icon as={TrashIcon} h="6" w="6" />
              </Button>
              <Divider w="1" h="6" orientation="vertical"/>
              <Checkbox onChange={handleRequiredChange} checked={!isQuestionRequired} >Required</Checkbox>
            </Flex>
          </Flex>
        </Flex> 
      </Box>
    </>
  )
}
