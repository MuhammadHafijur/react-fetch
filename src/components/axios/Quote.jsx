import { useState, useEffect } from "react";
import axios from "axios";

export default function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await axios.get("https://api.quotable.io/random");
      setQuote(res.data);
    };

    fetchQuote();
  }, []);
  return (
    <div>
      <h1>Get quotes using fetch API</h1>
      <div>{quote?.content}</div>
    </div>
  );
}
