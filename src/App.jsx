import { useState } from "react";
import "./App.css";
import LanguageTanslator from "./components/languageTanslator/LanguageTanslator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LanguageTanslator />
    </>
  );
}

export default App;
