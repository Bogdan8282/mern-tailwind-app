import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <>
      <Header />
      <main>
        <h1>{message}</h1>
      </main>
      <Footer />
    </>
  );
};

export default Home;
