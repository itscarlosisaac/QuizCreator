import { Container, Box } from "@chakra-ui/react"
import { Register } from '../components/auth/Register'
import { Link } from "react-router-dom"

export const RegisterScreen = () => {
  return (
    <Container minW="100vw" minH="100vh" bg="gray.100"  display="flex" justifyContent="center" alignItems="center" flexDir="column">
      <Box bg="white" padding="8" mb="4" borderRadius="md" maxW="420px" width="100%">
        <Register />
      </Box>
      <p>Already have an acocunt? <Link to="/app/login">Login here</Link></p>
    </Container>
  )
}
