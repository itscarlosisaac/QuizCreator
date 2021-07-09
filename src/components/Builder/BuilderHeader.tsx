import { Input,  Flex, Textarea, Box } from "@chakra-ui/react"
import {FC} from "react";
interface IProps {
  formValues: { title: string, description: string }
  saveFormHeaderData: (target: HTMLInputElement) => void,
}

export const BuilderHeader: FC<IProps> = ({saveFormHeaderData, formValues}) => {

  const { title, description } = formValues;

  const handleChange = (event: React.FormEvent): void => {
    saveFormHeaderData(event.target as HTMLInputElement)
  }

  return (
    <>
      <Flex>
        <Box p="8" bg="white" w="full" shadow="base" borderRadius="2">
          <Input onChange={handleChange} name="title" value={title} fontSize="28px" size="lg" variant="flushed" placeholder="Untitled Form" isRequired />
          <Textarea onChange={handleChange} name="description" value={description} fontSize="14px" mt="4" size="md" variant="flushed" placeholder="Form Description" isRequired resize="none" ></Textarea>
        </Box>
      </Flex> 
    </>
  )
}
