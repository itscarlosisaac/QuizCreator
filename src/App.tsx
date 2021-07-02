import { AppRouter } from "./routes/AppRouter";
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from 'react-redux'
import { store } from './redux/store';

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
