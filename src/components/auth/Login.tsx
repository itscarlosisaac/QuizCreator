import {useState} from "react";
import { Box, Input, Stack, InputGroup, InputLeftElement, Text, Button } from "@chakra-ui/react"
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useDispatch } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { startLoginEmailPassword } from "../../redux/actions/auth.actions";


export const Login = () => {

  const [userData, setUserData] = useForm({
    userEmail: "name@gmail.com",
    userPassword: "mypasseor",
  });
  const {  userEmail, userPassword } = userData;
  const [isLoadingLogin, setLoading] = useState(false);

  const dispatch = useDispatch()

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true)
    dispatch(startLoginEmailPassword(userEmail, userPassword))
  }

  const handleInputChange = (event: React.FormEvent) => {
    setUserData(event.target);
  }

  return (
    <Box>
      <form onSubmit={handleLogin}>
        <Stack spacing={3}>
          <Text fontSize="2xl" fontWeight="500">Login</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EmailIcon color="gray.300" />}
            />
            <Input onChange={handleInputChange} name={userEmail} value={userEmail} type="email" required placeholder="Email address" />
          </InputGroup>
          <InputGroup >
            <InputLeftElement
              pointerEvents="none"
              children={<LockIcon color="gray.300" />}
            />
            <Input onChange={handleInputChange} name={userPassword} value={userPassword} required type="password" placeholder="Password" />
          </InputGroup>
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
