import React from 'react'
import { Box, Heading, Button, Flex } from "@chakra-ui/react"
import { firebaseManager } from '../../firebase/FirebaseManager';
import { useHistory } from 'react-router-dom';

export const Empty = () => {

  const history = useHistory();

  const handleCreateNewForm = async () => {
    const formId = await firebaseManager.formManager.StartCreatingForm("newForm");
    console.log("ID:", formId, )
    history.push(`/app/builder/${formId}`)
  }

  const D = () => {
    firebaseManager.formManager.StartFetchingForms("newForm")
  }

  return (
    <>
      <Flex align="center" justify="center">
        <Box bg="white" p="10" shadow="xl" rounded="10" alignItems="center" justifyItems="center" display="flex" flexDir="column">
          <Heading mb="10">You have 0 Forms.</Heading>
          <Button onClick={D} size="lg" colorScheme="linkedin">GET DATA</Button>
          <Button onClick={handleCreateNewForm} size="lg" colorScheme="linkedin">Create Form</Button>
        </Box>
      </Flex>
    </>
  )
}
