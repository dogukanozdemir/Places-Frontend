import "./App.css";
import { ContentContainer } from "./components/ContentContainer/ContentContainer";
import { InputContainer } from "./components/InputContainer/InputContainer";
import { usePlacesReducer, PlacesContext } from "./store/PlacesContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {

  const context = usePlacesReducer()

  return (
    <QueryClientProvider client={queryClient}>
      <PlacesContext.Provider value={context}>
        <div className="App">
          <InputContainer />
          <ContentContainer />
        </div>
      </PlacesContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
