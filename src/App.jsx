import "./app.module.css";
import AppProvider from "./context/App.provider";
import Home from "./pages/Home";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
