import { Container } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { ViewerFooter } from "../components/Viewer/ViewerFooter"
import { ViewerHeader } from "../components/Viewer/ViewerHeader"
import { ViewerForm } from "../components/Viewer/ViewerForm"

export const ViewerScreen = () => {
  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <ViewerHeader />
          <ViewerForm />
          <ViewerFooter />
        </Container>
      </Container>
    </>
  )
}
