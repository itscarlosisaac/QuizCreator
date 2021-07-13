import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Heading, Text } from "@chakra-ui/react";
import { useHistory } from "react-router";
import { v4 as uuid_v4 } from 'uuid';

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
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useForm();

  useEffect(() => {
    const Single = async () => {
      setIsLoading(true);
      await dispatch(StartFetchingSingle( history.location.pathname.split("/")[2])) as any
      setIsLoading(false);
    }
    Single();
  }, [])
  
  const handleResponse = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    const userEmail = formData.email;
    delete formData.email;

    await firebaseManager.answerManager.StartSavingAsnwer({
      meta: {
        formId: QuestionData.meta.id,
        id: uuid_v4(),
        user: userEmail,
        createdAt: new Date(),
      },
      data: transformData(formData)
    });
    setIsSubmitting(false)
    history.push("/thankyou")
  }

  const transformData = (data: any) => {
    let transformedData:any = [];
    for (let item in data) {
      transformedData.push(
        {question: item, answer: data[item]}
      )
    }
    return transformedData;
  } 

  const handleChange = (event: React.FormEvent) => {
    event.preventDefault()
    setFormData(event.target as HTMLInputElement)
  }

  return (
    <>
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          { QuestionData && QuestionData.meta &&
            <>
              <Heading pt={10}>{QuestionData.meta.title}</Heading>
              <Text pb={10} as="p">{QuestionData.meta.description}</Text>
            </>
          }
          <form onSubmit={handleResponse}>
            {
              !isLoading && QuestionData &&
              <>
                <PublicForm handleChange={handleChange} questions={QuestionData.questionList } />
                <PublicFooter handleChange={handleChange} isLoading={isSubmitting}/>
              </>
            }
          </form>
        </Container>
      </Container>
    </>
  )
}
