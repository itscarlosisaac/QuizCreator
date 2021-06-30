import { Container, Box, Text, Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

export const Header = () => {
  return (
    <Container maxW="100vw"  bg="white" shadow="base" zIndex="2" position="relative" py="5">
      <Container maxW="container.xl" display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Text>
            Welcom back <strong> @username</strong>
          </Text>
        </Box>
        <Box>
          <Button
            variant="outline"
            colorScheme="linkedin"
            rightIcon={<ArrowForwardIcon/>}
          >
            Logout
          </Button>
        </Box>
      </Container>
    </Container>
  )
}
