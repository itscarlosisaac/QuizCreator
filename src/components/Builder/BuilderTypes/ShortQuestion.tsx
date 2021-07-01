import {
  FormControl,
  Input,
} from "@chakra-ui/react";


export const ShortQuestion = () => {
  return (
    <>
      <FormControl mb="8">
        <Input variant="flushed" placeholder="Question ?" isRequired />
      </FormControl>
    </>
  )
}
