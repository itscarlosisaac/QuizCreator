import { useEffect, useState  } from 'react';
import { useHistory  } from 'react-router-dom';

import { Header } from "../components/Header";
import { Container, Box, Text, Flex, Button, } from "@chakra-ui/react"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { ListAnswer } from '../components/Answers/ListAnswer'
import { firebaseManager } from "../firebase/FirebaseManager";
import { Loading } from '../components/common/Loading';

export const AnswerScreen = () => {
  const history = useHistory();
  const [answers, setAnswers] = useState<any[]>([]);
  const [form, setForm] = useState<any>();
  const [loading, isLoading] = useState(false);
  
  useEffect(() => {
    const id: string = history.location.pathname.split('/')[3];
    isLoading(true);
    firebaseManager.answerManager.GetAnswers(id).then((data) => setAnswers(data));
    firebaseManager.formManager.FetchSingle(id).then(data => setForm(data))
    isLoading(false);
  }, []);

  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl" pt="10">
          <Flex py="4" justify="start" align="center">
            <Button
              leftIcon={<ArrowBackIcon />} 
              colorScheme="linkedin"
              onClick={() => history.goBack()}>Back</Button>
          </Flex>
          {loading && <Loading/>}
          {form && !loading &&
            <Box  p={8} bg="white" shadow="sm">
              <Text as="h1" fontSize="xl" fontWeight="semibold" mb="2">{form.meta.title}</Text>
              <Text>{form.meta.description}</Text>
            </Box>
          }
          {!loading && <ListAnswer answers={answers}/>}
        </Container>
      </Container>
    </>
  )
}