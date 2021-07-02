import {
  FormControl,
  Input,
} from "@chakra-ui/react";
import { FC } from 'react'
interface IProps {
  id: string,
  isRequired?: boolean
}

export const ShortQuestion: FC <IProps> = (props) => {
  return (
    <>
      <FormControl mb="20" id={props.id}>
        <Input fontSize="xl" variant="flushed" placeholder="Question ?" isRequired />
      </FormControl>
    </>
  )
}
