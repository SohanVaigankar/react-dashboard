import React from "react";

// react-router
import { Routes, Route } from "react-router-dom";

// components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Details from "./pages/details/Details";
import List from "./pages/list/List";

// utils
import { userInputs } from "./utils/formats/formInputFormat";
import { productInputs } from "./utils/formats/formInputFormat";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/users">
          <Route exact index element={<List />} />
          <Route exact path=":userId" element={<Details />} />
          <Route
            exact
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
        </Route>
        <Route path="/products">
          <Route exact index element={<List />} />
          <Route exact path=":productId" element={<Details />} />
          <Route
            exact
            path="new"
            element={<New inputs={productInputs} title="Add New Product" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
