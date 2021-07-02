import { Container,Divider  } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Question } from '../components/Builder/Question';
import { BuilderFooter } from "../components/Builder/BuilderFooter";
import { BuilderHeader } from "../components/Builder/BuilderHeader";
import React, { useState } from "react";
import { uuid } from "uuidv4";

interface Question {
  id: string,
  type: "Short" | "Long" | "Multiple"
}

export const BuilderScreen = () => {
  
  const [state, setState] = useState<Question[]>([])

  const addQuestion = (): void => {
    setState((prev) => [
      ...prev,
      { id:uuid(),  type: "Multiple" }
    ])
  }

  const deleteQuestion = (id: string): void => {
    setState((prev) => prev.filter(question => question.id !== id));
  }

  const saveForm = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(event)
  }

  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <form onSubmit={saveForm}>
            <BuilderHeader/>
            <Divider orientation="horizontal" my="8" />
            {
              state.map(question => <Question
                key={question.id}
                id={question.id}
                deleteQuestion={deleteQuestion} />
              )
            }
            <BuilderFooter
              saveForm={saveForm}
              addQuestion={addQuestion} />
          </form>
        </Container>
      </Container>
    </>
  )
}
