import {
  Flex,
  Select,
  Box,
  Divider,
  Checkbox,
  Button
} from "@chakra-ui/react";
import { FC, useMemo, useEffect } from 'react';
import { uuid } from 'uuidv4';
import { Icon } from '@chakra-ui/icons'
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/outline";

import { MultipleChoice } from "./BuilderTypes/MultipleChoice";
import { ShortQuestion } from "./BuilderTypes/ShortQuestion";
import { LongQuestion } from "./BuilderTypes/LongQuestion";
import { OptionModel, QuestionData } from "../../DataModel/Questionnaire";
interface IProps {
  questionData: QuestionData,
  questionActions: any
}

export const Question: FC<IProps> = ({
  questionData,
  questionActions
}) => {

  const { id, isRequired, questionType } = questionData;
  const { updateQuestion, deleteQuestion, handleOptions } = questionActions;

  const handleSelectChange = (event: React.FormEvent) => {
    updateQuestion(id, "questionType", (event.target as HTMLSelectElement).value);
  }

  const handleQuestionChange  = (val: string) => {
    updateQuestion(id,"question", val)
  }

  const handleRequiredChange = () => {
    updateQuestion(id, "isRequired", !isRequired )
  }

  const handleSelectQuestionType = () => {
    switch (questionData.questionType) {
      case "Short":
        return <ShortQuestion
          questionData={questionData}
          setQuestion={handleQuestionChange} />;
      case "Long":
        return <LongQuestion
          questionData={questionData}
          setQuestion={handleQuestionChange}/>;
      default:
        return <MultipleChoice
          questionData={questionData}
          setQuestion={handleQuestionChange}
          handleOptions={handleOptions} />
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
            <Select defaultValue={questionType}  onChange={handleSelectChange}>
              <option value="Short">Short Question</option>
              <option value="Multiple">Multiple Choice</option>
              <option value="Long">Long Question</option>
            </Select>
            <Flex flexDir="row" justify="space-between" align="center" maxW="150px">
              <Button h="10" w="10" onClick={()=>deleteQuestion(id)}>
                <Icon as={TrashIcon} h="6" w="6" />
              </Button>
              <Divider w="1" h="6" orientation="vertical"/>
              <Checkbox
                onChange={handleRequiredChange}
                isChecked={isRequired} >
                Required
              </Checkbox>
            </Flex> 
          </Flex>
        </Flex> 
      </Box>
    </>
  )
}
