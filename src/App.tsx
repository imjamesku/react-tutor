import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Test from "./pages/TestPage";
import Search from "./pages/Search/Index";
import Square from "./pages/Squre/Index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/test">test</Link> <Link to="/about">about</Link>{" "}
        <Link to="/search">search</Link>
        <Link to="/square">square</Link>
        <Routes>
          <Route path="test" element={<Test />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="square" element={<Square />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
