import { Container, Heading,  Flex  } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { ListQuest } from "../components/Questionnaires/ListQuest"
import { Empty } from "../components/Questionnaires/Empty";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseManager } from '../firebase/FirebaseManager';

export const DashboardScreen = () => {

  const [state, setstate] = useState<any[]>([])

  useEffect(() => {
    const questionnaires = firebaseManager.formManager.StartFetchingForms("newForm");
    questionnaires.then(data => {
      setstate(data)
    })
  }, [])

  
  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <Flex>
            <Heading my="5" as="h1" size="xl" >
              You have {state.length} Forms.
            </Heading>
          </Flex>
          <Empty/>
          {/* <ListQuest/> */}
        </Container>
      </Container>
    </>
  )
}
