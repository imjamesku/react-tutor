import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Test from "./components/TestPage";
import Search from "./Search/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/test">test</Link> <Link to="/about">about</Link>{" "}
        <Link to="/search">search</Link>
        <Routes>
          <Route path="test" element={<Test />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
