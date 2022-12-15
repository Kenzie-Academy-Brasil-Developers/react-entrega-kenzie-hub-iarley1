import { TechProvider } from "./contexts/TechContext";
import { Providers } from "./contexts/UserContext";
import { RoutesPage } from "./Routes";
import { GlobalStle } from "./styles/globalStyles";


function App() {
  return (
    <>
      <GlobalStle />
      <Providers>
        <TechProvider>
          <RoutesPage />
        </TechProvider>
      </Providers>
    </>
  );
}

export default App;
