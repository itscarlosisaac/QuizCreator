import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Heading } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { v4 as uuid_v4 } from 'uuid';


import { Header } from "../components/Header"
import { PublicFooter } from "../components/Public/PublicFooter";
import { PublicForm } from "../components/Public/PublicForm";
import { StartFetchingSingle } from '../redux/actions/form.actions';
import { firebaseManager} from '../firebase/FirebaseManager';
import { useForm } from '../hooks/useForm';

export const PublicFormScreen = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const QuestionData = useSelector((state:any) => state.form.public)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useForm();

  useEffect(() => {
    const Single = async () => {
      setIsLoading(true);
      await dispatch(StartFetchingSingle( history.location.pathname.split("/")[2])) as any
      setIsLoading(false);
    }
    Single();
  }, [])
  
  const handleResponse = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Submitting")
    firebaseManager.answerManager.StartSavingAsnwer({
      questionnarie: QuestionData,
      answers: {
        meta: {
          id: uuid_v4(),
          user: formData.email,
          createdAt: new Date(),
        },
        data: formData
      }
    });
  }

  const handleChange = (event: React.FormEvent) => {
    event.preventDefault()
    setFormData(event.target as HTMLInputElement)
  }

  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <Heading>Public Form </Heading>
          <form onSubmit={handleResponse}>
            {
              !isLoading && QuestionData &&
              <>
                <PublicForm handleChange={handleChange} questions={QuestionData.questionList } />
                <PublicFooter handleChange={handleChange}/>
              </>
            }
          </form>
        </Container>
      </Container>
    </>
  )
}
