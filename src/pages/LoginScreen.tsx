import { Container, Box, Text, Link as ChakraLink } from "@chakra-ui/react"
import { Login } from '../components/auth/Login'
import { Link } from "react-router-dom"

export const LoginScreen = () => {
  return (
    <Container minW="100vw" minH="100vh" bg="gray.100"  display="flex" justifyContent="center" alignItems="center" flexDir="column">
      <Box bg="white" padding="8" mb="4" borderRadius="md" maxW="420px" width="100%" boxShadow="base">
        <Login />
      </Box>
      <Text>Need an acocunt? 
        <ChakraLink ml="1" color="blue.500">
          <Link to="/app/register">Register here</Link>
        </ChakraLink>
      </Text>
      
    </Container>
  )
}
