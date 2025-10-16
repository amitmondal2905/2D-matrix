import './App.css'

import MatrixProvider from "./context/MatrixContext";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <MatrixProvider>
        <Router />
      </MatrixProvider>
    </>
  );
}

export default App;
