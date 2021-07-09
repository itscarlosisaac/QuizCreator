import {FC} from 'react'
import {
  FormControl,
  Text,
  Flex,
  Select,
  Box,
  Divider,
  Checkbox,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

interface IProps {
  questionId: string,
  question: string,
  questionRequired: boolean,
  handleChange:any
}

export const SimpleQuestion: FC<IProps> = ({
  questionId,
  question,
  questionRequired,
  handleChange
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
        <Textarea
          name={question.replace(/ /g, "_").toLowerCase()} />
      </FormControl>
    </>
  )
}
