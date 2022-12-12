import { Providers } from "./contexts/UserContext";
import { RoutesPage } from "./Routes";
import { GlobalStle } from "./styles/globalStyles";


function App() {
  return (
    <>
      <GlobalStle />
      <Providers>
        <RoutesPage />
      </Providers>
    </>
  );
}

export default App;
