import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Box, Text, Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { startLogout } from "../redux/actions/auth.actions";
import { CleanForm } from "../redux/actions/form.actions";
import { CleanBuilder } from "../redux/actions/builder.actions";
import { DefaultRootState } from '../redux/store';

export const Header = () => {

  const dispatch = useDispatch()
  const history = useHistory();
  const { auth } = useSelector((state: DefaultRootState) => state);
  const handleLogout = () => {
    dispatch(startLogout())
    dispatch(CleanForm())
    dispatch(CleanBuilder())
    history.push('/')
  }

  return (
    <Container maxW="100vw"  bg="white" shadow="base" zIndex="2" position="relative" py="5">
      <Container maxW="container.xl" display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <Text>
            User: <strong> {auth.displayName} </strong>
          </Text>
        </Box>
        <Box>
          <Button
            onClick={handleLogout}
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
