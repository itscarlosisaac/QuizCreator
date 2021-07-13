import { useState } from "react";
import { useDispatch } from 'react-redux';
import { Box, Input, Stack, InputGroup, InputLeftElement, Text, Button } from "@chakra-ui/react"
import { EmailIcon, LockIcon, AtSignIcon } from '@chakra-ui/icons';

import { useForm } from '../../hooks/useForm';
import { startRegister } from "../../redux/actions/auth.actions";

/*  
   TODO Convert to class component.
   TODO Fix bug with async state update.
   TODO Fix bug with duplicated user registration
*/


export const Register = () => {
  const dispatch = useDispatch()
  const [userValidationErrors, setErrors] = useState({
    userError: false,
    emailError: false,
    passwordError: false,
    passwordVerificationError: false,
    sameEmailMessageError: ""
  });
  const [isLoadingRegister, setLoading] = useState(false);

  const [userData, setUserData] = useForm({
    username: "",
    userEmail: "",
    userPassword: "",
    userPassVerification: ""
  });

  const { username, userEmail, userPassword, userPassVerification } = userData;
  const { userError, emailError, passwordError, passwordVerificationError, sameEmailMessageError } = userValidationErrors;

  const handleInputChange = (event: React.FormEvent) => {
    setUserData(event.target);
  }

  const handleFormValidation = async () => {
    !username
      ? setErrors((prev) => ({ ...prev, userError: true }))
      : setErrors((prev) => ({ ...prev, userError: false }))
    !userEmail
      ? setErrors((prev) => ({ ...prev, emailError: true, sameEmailMessageError: ""  }))
      : setErrors((prev) => ({ ...prev, emailError: false, sameEmailMessageError: "" }))
    !userPassword
      ? setErrors((prev) => ({ ...prev, passwordError: true }))
      : setErrors((prev) => ({ ...prev, passwordError: false }))
    userPassVerification !== userPassword
      ? setErrors((prev) => ({ ...prev, passwordVerificationError: true }))
      : setErrors((prev) => ({ ...prev, passwordVerificationError: false }))
  }

  const handlingFbError = (response: any) => {
    if (!response) return;
    setLoading(false)
    setErrors((prev) => ({ ...prev, emailError: true, sameEmailMessageError: response.message }))
  }

  const handleRegister = async(event: React.FormEvent) => {
    event.preventDefault();
    await handleFormValidation();
    await performRegister();
  }

  const performRegister = async () => {
    console.log("Performing registration")
    console.log( userError, emailError, passwordError, passwordVerificationError, sameEmailMessageError )
    if (!userError && !emailError && !passwordError && !passwordVerificationError) {
      console.log("handling reguister")
      setLoading(true)
      const response = await dispatch(startRegister(userEmail, userPassword, username))
      handlingFbError(response)
    }
  }

  return (
    <Box>
      <form onSubmit={handleRegister}>
        <Stack spacing={3}>
          <Text fontSize="2xl" fontWeight="500">Register</Text>
            <InputGroup flexDir="column">
              <InputLeftElement
                pointerEvents="none"
                children={<AtSignIcon color="gray.300" />}
              />
            <Input
                isInvalid={userError}
                onChange={handleInputChange}
                value={username}
                name="username"
                type="text"
                placeholder="Full name" />
                {userError && <Text as="small" color="red.400">Name is invalid.</Text>}
            </InputGroup>
            <InputGroup flexDir="column">
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input
                isInvalid={emailError || sameEmailMessageError !== ""}
                onChange={handleInputChange}
                value={userEmail}
                name="userEmail"
                type="email"
                placeholder="Email address" />
                {emailError && sameEmailMessageError === "" &&<Text as="small" color="red.400">Email address is invalid.</Text>}
                {emailError && sameEmailMessageError !== "" && <Text as="small" color="red.400">{ sameEmailMessageError}.</Text>}
            </InputGroup>
            <InputGroup flexDir="column" >
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input
                isInvalid={passwordError}
                onChange={handleInputChange}
                value={userPassword}
                name="userPassword"
                type="password"
                placeholder="Password" />
                {passwordError && <Text as="small" color="red.400">Password is invalid.</Text>}
            </InputGroup>
            <InputGroup flexDir="column">
              <InputLeftElement
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input
                isInvalid={passwordVerificationError}
                required
                onChange={handleInputChange}
                value={userPassVerification}
                name="userPassVerification"
                type="password"
                placeholder="Repeat Password" />
                {passwordVerificationError && <Text as="small" color="red.400">Password verification does not match password.</Text>}
            </InputGroup>
          <Button
              isLoading={isLoadingRegister}
              type="submit"
              loadingText="Loading"
              colorScheme="linkedin"
              variant="solid"
              spinnerPlacement="start"
            >
              Register
            </Button>
        </Stack>
      </form>
    </Box>
  )
}
