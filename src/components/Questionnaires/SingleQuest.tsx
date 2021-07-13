import { FC, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Text,
  Button,
  Heading,
  Divider,
  ButtonGroup,
  Flex
} from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icons"
import { TrashIcon, PencilIcon, DocumentSearchIcon, ClipboardCopyIcon } from "@heroicons/react/outline"
import { StartDeletingFormAction } from '../../redux/actions/form.actions';


interface IProps {
  formData: any
}

export const SingleQuest: FC <IProps> = ({
  formData
}) => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = useRef() as React.RefObject<HTMLButtonElement>
  const { title, description, id, publicUrl } = formData.meta;

  
  const Delete = () => {
    dispatch(StartDeletingFormAction(id))
    onClose();
  }

  return (
    <>
      <Flex flexWrap="wrap" bg="white" shadow="md" p="3" borderRadius="4" justify="space-between" align="flex-start" flexDir="column" mb="8">
        <Box>
          <Heading as="h3" size="md" >
            {title}
          </Heading>
          <Divider w="20" orientation="horizontal" h="2" my="2"/>
          <Text> {description} </Text>
          <Text fontSize="sm" fontWeight="700" color="blue.300">
            {formData.questionList.length} Question{ formData.questionList.length > 1 && "s"}.
          </Text>
          <Text as="small"  verticalAlign="middle" >
            Public Url: <Text as="span">{publicUrl}</Text>
          </Text>
        </Box>
        <ButtonGroup  flexWrap="wrap"  mt="4" size="sm" variant="outline" spacing="2">
          <Link to={`/app/viewer/${id}/answers`}>
            <Button
              mt="2"
              size="sm"
              colorScheme="purple"
              leftIcon={ <Icon as={DocumentSearchIcon} w={4} h={4} />}>
            View Answers
            </Button>
          </Link>
          <Link to={`/app/viewer/${id}`}>
            <Button
              mt="2"
              size="sm"
              colorScheme="green"
              leftIcon={ <Icon as={DocumentSearchIcon} w={4} h={4} />}>
              View Form
            </Button>
          </Link>
          <Link to={{
              pathname: `/app/builder/${id}`,
              state: {...formData}
            }}>
            <Button
              mt="2"
              size="sm"
              colorScheme="linkedin"
              leftIcon={<Icon as={PencilIcon} w={4} h={4} />}> Edit </Button>
          </Link>
          <Button
            mt="2"
            onClick={() => setIsOpen(true)}
            size="sm"
            colorScheme="red"
            leftIcon={<Icon as={TrashIcon} w={4} h={4} />}
            >Delete</Button>
        </ButtonGroup>
        {/* ALERT DIALOG */}
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Form
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? 
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={Delete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Flex>
    </>
  )
}
