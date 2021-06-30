import { Box, Input, Stack, InputGroup, InputLeftElement, Text, Button } from "@chakra-ui/react"
import { EmailIcon, LockIcon } from '@chakra-ui/icons';

export const Login = () => {
  return (
    <Box>
      <Stack spacing={3}>
        <Text fontSize="2xl" fontWeight="500">Login</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<EmailIcon color="gray.300" />}
          />
          <Input type="email" placeholder="Email address" />
        </InputGroup>
        <InputGroup >
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.300" />}
          />
          <Input type="password" placeholder="Password" />
        </InputGroup>
        <Button
          loadingText="Loading"
          colorScheme="linkedin"
          variant="solid"
          spinnerPlacement="start"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  )
}
