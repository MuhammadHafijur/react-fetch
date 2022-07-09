import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/fetch/Quote";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Quote />
    </div>
  );
}

export default App;
