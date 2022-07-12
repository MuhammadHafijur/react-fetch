import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const data = await res.json();
  return data;
};

export default function Quote() {
  const { data, error } = useSWR("https://api.quotable.io/random", fetcher, {
    suspense: true,
  });
  console.log(data);

  if (error) {
    return <h1>There was an error!</h1>;
  }

  return (
    <div>
      <h1>Get quotes using fetch API</h1>
      <div>{data.content}</div>
    </div>
  );
}