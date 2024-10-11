import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./providers/theme";
import Playfield from "./views/Playfield";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Playfield fieldSize={15} />
    </ThemeProvider>
  );
}

export default App;
