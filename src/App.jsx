import React from "react";
import RoutesFile from "./RoutesFile";
import { Route, Routes } from "react-router-dom";
import PortfolioDetails from "./components/portfolio/PortfolioDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RoutesFile />} />
        <Route path="/:title" element={<PortfolioDetails />} />
      </Routes>
    </>
  );
};

export default App;
