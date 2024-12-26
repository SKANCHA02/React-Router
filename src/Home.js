import React from "react";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import MovDescreption from "./Components/MovDescreption";
import Error from "./Components/Error";
import Navigation from "./Components/Navigation";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovDescreption />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Home;
