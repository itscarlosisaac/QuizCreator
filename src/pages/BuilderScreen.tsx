import { Container,Divider  } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Question } from '../components/Builder/Question';
import { BuilderFooter } from "../components/Builder/BuilderFooter";
import { BuilderHeader } from "../components/Builder/BuilderHeader";

export const BuilderScreen = () => {
  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <BuilderHeader/>
          <Divider orientation="horizontal" my="8" />
          <Question />
          <Question />
          <Question />
          <BuilderFooter />
        </Container>
      </Container>
    </>
  )
}
