import { Suspense } from "react";
import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Quote from "./components/query/Quote";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Quote />
          <Quote />
        </Suspense>
      </QueryClientProvider>
    </div>
  );
}

export default App;
