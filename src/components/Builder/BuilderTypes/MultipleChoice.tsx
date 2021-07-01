import {
  FormControl,
  Input,
  Button,
  Box,
  RadioGroup,
  Radio,
  HStack
} from "@chakra-ui/react";


export const MultipleChoice = () => {
  return (
    <>
      <FormControl mb="8">
        <Input variant="flushed" placeholder="Question ?" isRequired />
      </FormControl>
      <RadioGroup>  
        <HStack mb="4">
          <Radio /><Input variant="outline" placeholder="Answer 1" isRequired />
        </HStack>
        <HStack mb="4">
          <Radio /><Input variant="outline" placeholder="Answer 2" isRequired />
        </HStack>
      </RadioGroup>
      <Box mt="6">
        <Button width="100px" size="sm" colorScheme="linkedin" variant="outline">Add Option</Button>
      </Box>
    </>
  )
}
