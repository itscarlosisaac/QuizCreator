import {
  FormControl,
  Textarea
} from "@chakra-ui/react";
import  { FC } from 'react'

export const LongQuestion: FC<any> = ({
  questionData,
  setQuestion,
}) => {
  
  const handleChange = (event: React.FormEvent) => {
    const Target = event.target as HTMLInputElement;
    setQuestion(Target.value);
  }

  return (
    <>
      <FormControl mb="10" id={questionData.id}>
        <Textarea
          onChange={handleChange}
          value={questionData.question}
          fontSize="xl"
          variant="flushed"
          placeholder="Question ?"
          isRequired
          resize="none">
        </Textarea>
      </FormControl>
    </>
  )
}
