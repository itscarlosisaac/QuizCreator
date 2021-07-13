import {useState} from "react";
import { Box, Input, Stack, InputGroup, InputLeftElement, Text, Button } from "@chakra-ui/react"
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword } from "../../redux/actions/auth.actions";


export const Login = () => {
  const [error, setError] = useState({
    message: "",
    hasError: false
  });
  const [userData, setUserData] = useForm({
    userEmail: "",
    userPassword: "",
  });
  const { userEmail, userPassword } = userData;
  
  const [isLoadingLogin, setLoading] = useState(false);

  const dispatch = useDispatch()

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)
    const response = dispatch(startLoginEmailPassword(userEmail, userPassword))
    Promise.resolve(response).then(data => {
      if (typeof data === "string") {
        setError({ message: data, hasError: true })
        setLoading(false)
      }
    })
  }

  const handleInputChange = (event: React.FormEvent) => {
    setUserData(event.target);
  }

  return (
      <Box>
        <form onSubmit={handleLogin}>
          <Stack spacing={3}>
            <Text fontSize="2xl" fontWeight="500">Login</Text>
            <InputGroup >
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input onChange={handleInputChange} name="userEmail" value={userEmail} type="email" required placeholder="Email address" />
            </InputGroup>
            <InputGroup >
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input onChange={handleInputChange} name="userPassword" value={userPassword} required type="password" placeholder="Password" />
          </InputGroup>
          {error.hasError && <Text color="red" fontSize="small" as="small">{ error.message }</Text>}
            <Button
              isLoading={isLoadingLogin}
              type="submit"
              loadingText="Loading"
              colorScheme="linkedin"
              variant="solid"
              spinnerPlacement="start"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
  )
}
