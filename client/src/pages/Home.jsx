import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <>
      <main>
        <h1 className="p-4">{message}</h1>
      </main>
    </>
  );
};

export default Home;
