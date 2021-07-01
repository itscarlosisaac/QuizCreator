
import { Header } from "../components/Header";
import { Container } from "@chakra-ui/react"
import { ListAnswer } from '../components/Answers/ListAnswer'

export const AnswerScreen = () => {
  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <ListAnswer/>
        </Container>
      </Container>
    </>
  )
}