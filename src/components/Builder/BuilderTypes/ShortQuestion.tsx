import {
  FormControl,
  Input,
} from "@chakra-ui/react";
import { FC } from 'react'

export const ShortQuestion: FC<any> = ({
  questionData,
  setQuestion,
}) => {

  
  const handleChange = (event: React.FormEvent) => {
    const Target = event.target as HTMLInputElement;
    setQuestion(Target.value);
  }

  return (
    <>
      <FormControl mb="20" id={questionData.id}>
        <Input
          onChange={handleChange}
          value={questionData.question}
          fontSize="xl"
          variant="flushed"
          placeholder="Question ?"
          isRequired />
      </FormControl>
    </>
  )
}
