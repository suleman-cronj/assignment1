import React from "react";
import Counter from "../Pages/Counter";
import ListView from "../Pages/ListView";
import User from "../Pages/UserDetail";
import Time from "../Pages/Time";
import NavBar from "../Components/NavigationBar/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Rematch/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="counter" element={<Counter />} />
            <Route path="listview" element={<ListView />} />
            <Route path="user" element={<User />} />
            <Route path="time" element={<Time />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
