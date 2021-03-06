import { Container, Box, Text, ScaleFade} from "@chakra-ui/react"
import { Login } from '../components/auth/Login'
import { Link } from "react-router-dom"

export const LoginScreen = () => {
  return (
    <Container minW="100vw" minH="100vh" bg="gray.100" display="flex" justifyContent="center" alignItems="center" flexDir="column">
      <ScaleFade initialScale={0.6} in={true}>
        <Box bg="white" padding="8" mb="4" borderRadius="md" maxW="420px" width="100%" boxShadow="base">
          <Login />
        </Box>
      </ScaleFade>
      <Text>Need an acocunt? 
        <Text as="span" ml="1" color="blue.500">
          <Link to="/auth/register">Register here</Link>
        </Text>
      </Text>
      
    </Container>
  )
}
