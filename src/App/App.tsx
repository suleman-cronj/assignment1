import React from "react";
import Counter from "../Pages/Counter";
import ListView from "../Pages/ListView";
import NavBar from "../Components/NavigationBar/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="counter" element={<Counter />} />
          <Route path="listview" element={<ListView />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
