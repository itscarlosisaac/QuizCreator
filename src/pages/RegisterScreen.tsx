import { Container, Box, Text,ScaleFade  } from "@chakra-ui/react"
import { Register } from '../components/auth/Register'
import { Link } from "react-router-dom"

export const RegisterScreen = () => {
  return (
    <Container minW="100vw" minH="100vh" bg="gray.100" display="flex" justifyContent="center" alignItems="center" flexDir="column">
      <ScaleFade initialScale={0.6} in={true}>
        <Box bg="white" padding="8" mb="4" borderRadius="md" maxW="420px" width="100%"  boxShadow="base">
          <Register />
        </Box>
      </ScaleFade>
      <Text>Already have an acocunt? 
        <Text as="span" ml="1"  color="blue.500">
          <Link to="/app/login">Login here</Link>
        </Text>
      </Text>
    </Container>
  )
}
