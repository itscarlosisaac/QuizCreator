import {
  FormControl,
  FormLabel,
  Container,
  Input,
  Flex,
  Textarea,
  SelectField,
  Select,
  Button,
  ButtonGroup,
  Box,
  Tooltip,
  Text,
  Divider,
  Checkbox,
  RadioGroup,
  Radio,
  HStack
} from "@chakra-ui/react";

import { Icon } from '@chakra-ui/icons'
import { TrashIcon } from "@heroicons/react/outline";
import { MultipleChoice } from "./BuilderTypes/MultipleChoice";
import { ShortQuestion } from "./BuilderTypes/ShortQuestion";
import { LongQuestion } from "./BuilderTypes/LongQuestion";

export const Question = () => {
  return (
    <>
    <Box bg="white" w="full" shadow="base" borderRadius="2" p="8" mb="6">
      <Flex justify="space-between" flexDir="row">
          <Flex w="80%" flexDir="column">
            <MultipleChoice/>
          </Flex>
          <Flex flexDir="column" justify="space-between">
            <Select>
              <option selected value="option1">Multiple Choice</option>
              <option value="option2">Short Question</option>
              <option value="option3">Long Question</option>
              </Select>
              <Flex flexDir="row" justify="space-between" align="center" maxW="150px">
                <Icon as={TrashIcon} h="6" w="6" />
                <Divider w="1" h="6" orientation="vertical"/>
                <Checkbox defaultIsChecked >Required</Checkbox>
              </Flex>
          </Flex>
        </Flex> 
      </Box>
    </>
  )
}
