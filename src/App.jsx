import { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/swr/Quote";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading data...</h1>}>
        <Quote />
      </Suspense>
    </div>
  );
}

export default App;
