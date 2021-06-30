import { Box, Input, Stack, InputGroup, InputLeftElement, Text, Button } from "@chakra-ui/react"
import { EmailIcon, LockIcon, AtSignIcon } from '@chakra-ui/icons';

export const Register = () => {
  return (
    <Box>
      <Stack spacing={3}>
        <Text fontSize="2xl" fontWeight="500">Register</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AtSignIcon color="gray.300" />}
          />
          <Input type="text" placeholder="Username" />
        </InputGroup>
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
        <InputGroup >
          <InputLeftElement
            pointerEvents="none"
            children={<LockIcon color="gray.300" />}
          />
          <Input type="password" placeholder="Repeat Password" />
        </InputGroup>
        <Button
          loadingText="Loading"
          colorScheme="linkedin"
          variant="solid"
          spinnerPlacement="start"
        >
          Register
        </Button>
      </Stack>
    </Box>
  )
}
