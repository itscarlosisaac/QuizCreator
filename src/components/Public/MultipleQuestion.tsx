import {FC} from 'react'
import {
  FormControl,
  Text,
  Flex,
  Select,
  Box,
  Divider,
  Stack,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  FormHelperText,
  Radio,
  RadioGroup
} from "@chakra-ui/react";

interface IProps {
  questionId: string,
  question: string,
  questionRequired: boolean,
  options: any[],
  handleChange:any
}
export const MultipleQuestion: FC<IProps> = ({
  questionId,
  question,
  questionRequired,
  options,
  handleChange,
}) => {
  return (
    <>
      <FormControl
        onChange={handleChange}
        id={questionId}
        isRequired={questionRequired}>
        <FormLabel>
          {question}
        </FormLabel>
        <RadioGroup name={question.replace(/ /g, "_").toLowerCase()}>
          <Stack>
            {
              options.map(option => {
                return (
                  <Radio key={option.id} value={option.value}>
                    {option.value}
                  </Radio>)
              })
            }
          </Stack>
        </RadioGroup>
      </FormControl>
    </>
  )
}
