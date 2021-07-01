import {
  FormControl,
  Input,
  Textarea
} from "@chakra-ui/react";


export const LongQuestion = () => {
  return (
    <>
      <FormControl mb="8">
        <Textarea variant="flushed" placeholder="Question ?" isRequired resize="none">
        </Textarea>
      </FormControl>
    </>
  )
}
