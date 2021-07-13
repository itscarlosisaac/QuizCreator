import { Box, UnorderedList } from '@chakra-ui/react'
import {FC} from 'react'
import { SingleAnswer } from './SingleAnswer'

interface IProps {
  answers: any[]
}

export const ListAnswer: FC<IProps> = ({ answers }) => {
  return (
    <Box py="10">
      <UnorderedList styleType="none" m={0}>
      { answers.map((answer, index) =>( <SingleAnswer data={answer} key={index} /> )) }
      </UnorderedList>
    </Box>
  )
}
