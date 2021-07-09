import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Heading,  Flex, Button  } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { ListQuest } from "../components/Questionnaires/ListQuest"
import { StartFetchingForms, StartCreatingNewForm } from "../redux/actions/form.actions";
import { LoadingScreen } from "./LoadingScreen";
import { Loading } from "../components/common/Loading";

export const DashboardScreen = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const formList = useSelector((state: any) => state.form.formList);
  const [isLoadingForms, setIsLoadingForms] = useState<boolean>(false)
  const [isCreating, setIsCreating] = useState<boolean>(false)

  useEffect(() => {
    setIsLoadingForms(true)     
    const InternalFetch = async () => {
      await dispatch(StartFetchingForms("newForm"))
    };
    InternalFetch();
    setIsLoadingForms(false)
  }, [])

  const handleCreateNewForm = async () => {
    setIsCreating(true)
    const id = await dispatch(StartCreatingNewForm("newForm"))
    history.push(`/app/builder/${id}`)
  }

  if (isLoadingForms) {
    return <LoadingScreen/>
  }
  
  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" py="4">
            <Heading my="5" as="h1" size="md" >
              You have {formList.length} Forms.
            </Heading>
            <Button
              isLoading={isCreating}
              onClick={handleCreateNewForm}
              size="md"
              colorScheme="linkedin">
              Create New Form
            </Button>
          </Flex>
          <Suspense fallback={<Loading />}>
            <ListQuest formList={formList} />
          </Suspense>
        </Container>
      </Container>
    </>
  )
}
