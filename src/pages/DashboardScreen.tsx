import { Container, Box, Text,  Button, Heading, Divider, ButtonGroup, Flex  } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icons"
import { TrashIcon, PencilIcon } from "@heroicons/react/outline"
import { Header } from "../components/Header"
import { ListQuest } from "../components/Questionnaires/ListQuest"

export const DashboardScreen = () => {
  return (
    <>
      <Header />
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <Flex>
            <Heading my="5" as="h1" size="xl" >
              You have 20 Forms.
            </Heading>
          </Flex>
          <ListQuest/>
        </Container>
      </Container>
    </>
  )
}
