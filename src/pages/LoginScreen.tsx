import { Container, Box } from "@chakra-ui/react"
import { Login } from '../components/auth/Login'
import { Link } from "react-router-dom"

export const LoginScreen = () => {
  return (
    <Container minW="100vw" minH="100vh" bg="gray.100"  display="flex" justifyContent="center" alignItems="center" flexDir="column">
      <Box bg="white" padding="8" mb="4" borderRadius="md" maxW="420px" width="100%">
        <Login />
      </Box>
      <p>Need an acocunt? <Link to="/app/register">Register here</Link></p>
    </Container>
  )
}
