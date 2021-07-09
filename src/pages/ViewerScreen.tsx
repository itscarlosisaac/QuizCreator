import { Container,Flex, Button } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { Header } from "../components/Header"
import { ViewerHeader } from "../components/Viewer/ViewerHeader"
import { ViewerForm } from "../components/Viewer/ViewerForm"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { DefaultRootState } from "../redux/store"

export const ViewerScreen = () => {
  const history = useHistory();
  const id = history.location.pathname.split("/")[3];
  const { formList } = useSelector((data: DefaultRootState) => data.form);
  const selected = formList.filter((form: any) => form.meta.id === id)[0];

  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <Flex py="4" justify="start" align="center">
            <Button
              leftIcon={<ArrowBackIcon />} 
              colorScheme="linkedin"
              onClick={() => history.goBack()}>Back</Button>
          </Flex>
          <ViewerHeader meta={selected.meta} />
          <ViewerForm questions={selected.questionList} />
        </Container>
      </Container>
    </>
  )
}
