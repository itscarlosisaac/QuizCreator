import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Heading, Button, Flex } from "@chakra-ui/react"
import { useHistory } from 'react-router-dom';
import { StartCreatingNewForm } from '../../redux/actions/form.actions';

export const Empty = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const [isCreating, setIsCreating] = useState(false)

  const handleCreateNewForm = async () => {
    setIsCreating(true)
    const id = await dispatch(StartCreatingNewForm("newForm"))
    history.push(`/app/builder/${id}`)
  }

  return (
    <>
      <Flex align="center" justify="center">
        <Box bg="white" p="10" shadow="xl" rounded="10" alignItems="center" justifyItems="center" display="flex" flexDir="column">
          <Button
            isLoading={isCreating}
            onClick={handleCreateNewForm}
            size="lg"
            colorScheme="linkedin">
            Create Form
          </Button>
        </Box>
      </Flex>
    </>
  )
}
