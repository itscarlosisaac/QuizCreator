import {
  FormControl,
  Input,
  Textarea
} from "@chakra-ui/react";
import { FC } from 'react'
interface IProps {
  id: string,
  isRequired?: boolean
}

export const LongQuestion: FC <IProps> = (props) => {
  return (
    <>
      <FormControl mb="10" id={props.id}>
        <Textarea fontSize="xl" variant="flushed" placeholder="Question ?" isRequired resize="none">
        </Textarea>
      </FormControl>
    </>
  )
}
