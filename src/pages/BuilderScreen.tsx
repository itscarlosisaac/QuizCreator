import { v4 as uuid_v4 } from 'uuid';
import { useHistory, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Divider, Button, Flex, useToast } from "@chakra-ui/react"
import { ArrowBackIcon } from '@chakra-ui/icons'

import { Header } from "../components/Header"
import { Question } from '../components/Builder/Question';
import { BuilderFooter } from "../components/Builder/BuilderFooter";
import { BuilderHeader } from "../components/Builder/BuilderHeader";
import { StartSaveFormAction } from "../redux/actions/form.actions";
import { GetEditing } from "../redux/actions/builder.actions";

import { useForm } from "../hooks/useForm";
import { QuestionData } from "../DataModel/Questionnaire";
import { Loading } from '../components/common/Loading';

export const BuilderScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [questionList, setQuestionList] = useState<QuestionData[]>([])
  const [saving, isSaving] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const toast = useToast()

  const loc = useLocation().pathname.replace("/app/builder/", '/public/');
  const formUrl = new URL(loc, "https://fueled-questionnaire.web.app/");


  const [formValues, setFormValues, reset, setValues] = useForm({
    title: "",
    description: "",
  })

  const { publicUrl } = formValues;

  useEffect(() => {
    const Single = async () => {
      setIsLoading(true);
      const id = history.location.pathname.split("/")[3];
      let single = await dispatch(GetEditing(id)) as any
      setValues({...single.meta});
      setQuestionList(single.questionList);
      setIsLoading(false);
    }
    Single();
  }, [])
  
  const addQuestion = (): void => {
    setQuestionList((prev) => [
      ...prev,
      {
        id: uuid_v4(),
        questionType: "Short",
        question: "",
        options: null
      }
    ])
  }

  const deleteQuestion = (id: string): void => {
    setQuestionList((prev) => prev.filter(question => question.id !== id));
  }

  const saveFormHeaderData = (target: HTMLInputElement) => {
    setFormValues(target);
  }

  const handleUpdateQuestion = <PropType extends keyof QuestionData>(id: string, prop: PropType, change: any) => {
    let toUpdate = questionList.map(q => {
      if (q.id === id) { q[prop] = change }
      return q;
    } );
    setQuestionList(toUpdate)
  }

  const addOption = (questionId: string ) => {
    console.log("adding")
    let toUpdate = questionList.map(q => {
      if (q.id === questionId) {
        if (q.options === null) {
          q.options = [{ id: uuid_v4(), value: "" }];
        } else {
          q.options!.push({ id:uuid_v4(), value: "" })
        }
       }
      return q;
    });
    setQuestionList(toUpdate)
  }


  const deleteOption = (questionId: string, optionId: string) => {
    let toUpdate = questionList.map(q => {
      if (q.id === questionId) {
        let filtered = q.options!.filter(option => option.id !== optionId)
        q.options = filtered;
       }
      return q;
    } );
    setQuestionList(toUpdate)
  }

  const updateOption = (questionId:string, optionId:string, incomingChange:string) => {
    let toUpdate = questionList.map(q => {
      if (q.id === questionId) {
        q.options!.map(option => {
          if (option.id === optionId) {
            option.value = incomingChange;
          }
        })
       }
      return q;
    } );
    setQuestionList(toUpdate)
  }

  const saveForm = async (event: React.FormEvent) => {
    event.preventDefault();
    isSaving(true)
    const id = history.location.pathname.split("/")[3];
    toast({
      title: "Form Saved",
      description: "The form has been saved.",
      status: "success",
      duration: 4000,
      isClosable: true,
    })
    await dispatch(
      StartSaveFormAction(id,
        {
          meta: {
            id,
            ...formValues,
            updatedAt: new Date()
          },
          questionList
        }
      ))
    isSaving(false)
  }

  const questionActions = {
    updateQuestion: handleUpdateQuestion, 
    deleteQuestion: deleteQuestion,
    handleOptions: {
      add: addOption,
      update: updateOption,
      remove: deleteOption,
    }
  }
  
  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          { isLoading && <Loading /> ||
            <>
            <Flex py="4" justify="start" align="center">
              <Button
                leftIcon={<ArrowBackIcon />} 
                colorScheme="linkedin"
                onClick={() => history.goBack()}>Back</Button>
            </Flex>
            <form onSubmit={saveForm}>
              <BuilderHeader
                formValues={formValues}
                saveFormHeaderData={saveFormHeaderData}/>
              <Divider orientation="horizontal" my="8" />
              {
                questionList.map((question, i:number) => <Question
                  key={i}
                  questionData={question}
                  questionActions={questionActions} />
                )
              }
              <BuilderFooter
                publicUrl={publicUrl}
                saving={saving}
                addQuestion={addQuestion} />
              </form>
            </>
          }
        </Container>
      </Container>
    </>
  )
}
