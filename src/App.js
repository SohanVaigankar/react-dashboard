import React from "react";

// react-router
import { Routes, Route } from "react-router-dom";

// components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import List from "./pages/list/List";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/users">
          <Route exact index element={<List />} />
          <Route exact path=":userId" element={<Single />} />
          <Route exact path="new" element={<New />} />
        </Route>
        <Route path="/products">
          <Route exact index element={<List />} />
          <Route exact path=":productId" element={<Single />} />
          <Route exact path="new" element={<New />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
