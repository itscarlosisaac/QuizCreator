import { AppRouter } from "./routes/AppRouter";
import { ChakraProvider } from "@chakra-ui/react"
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <AppRouter/>
      </div>
    </ChakraProvider>
  );
}

export default App;
