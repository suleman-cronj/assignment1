import React from "react";
import Counter from "../Pages/Counter";
import ListView from "../Pages/ListView";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="counter" element={<Counter />} />
          <Route path="listview" element={<ListView />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
