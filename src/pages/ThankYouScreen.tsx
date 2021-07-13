import { Container, Box, Heading, Flex, Text } from "@chakra-ui/react";

export const ThankYouScreen = () => {
  return (
    <>
      <Container minW="100vw" minH="100vh" bg="gray.100" >
        <Container maxW="container.xl">
          <Flex align="center" justify="center">
            <Box bg="white" p="8" borderRadius="lg" shadow="base" maxW="450px"  textAlign="center"  mt="20">
              <Heading as="h1">
                Thank you for filling out our form.
              </Heading>
              <Text as="p" mt="6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, consequuntur atque doloribus quae nihil provident.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Container>
    </>
  )
}