import "./app.module.css";
import { AppContext } from "./context/App.context";
import Home from "./pages/Home";

function App() {
  return (
    <AppContext>
      <Home />
    </AppContext>
  );
}

export default App;
