import React, { useContext } from "react";
import "./styles/dark.scss";

// react-router
import { Routes, Route } from "react-router-dom";

// components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Details from "./pages/details/Details";
import List from "./pages/list/List";
import PrivateRoute from "./routes/PrivateRoute";
import Earnings from "./pages/earnings/Earnings";
import Settings from "./pages/settings/Settings";
import Activity from "./pages/activity/Activity";
import Calculators from "./pages/calculators/Calculators";
import Calender from "./pages/calender/Calender";

// utils
import {
  userInputs,
  orderInputs,
  productInputs,
} from "./utils/formats/formInputFormat";

// context
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  // context
  const { isDarkModeEnabled } = useContext(ThemeContext);

  return (
    <div className={isDarkModeEnabled ? "app dark" : "app"}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route exact path="/login" element={<Login />} />
        <Route path="/users">
          <Route
            exact
            index
            element={
              <PrivateRoute>
                <List />{" "}
              </PrivateRoute>
            }
          />
          <Route
            exact
            path=":userId"
            element={
              <PrivateRoute>
                <Details />{" "}
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="new"
            element={
              <PrivateRoute>
                <New inputs={userInputs} title="Add New User" />{" "}
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/products">
          <Route
            exact
            index
            element={
              <PrivateRoute>
                <List />{" "}
              </PrivateRoute>
            }
          />
          <Route
            exact
            path=":productId"
            element={
              <PrivateRoute>
                <Details />{" "}
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="new"
            element={
              <PrivateRoute>
                <New inputs={productInputs} title="Add New Product" />{" "}
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/orders">
          <Route
            exact
            index
            element={
              <PrivateRoute>
                <List />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path=":orderId"
            element={
              <PrivateRoute>
                <Details />{" "}
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="new"
            element={
              <PrivateRoute>
                <New inputs={orderInputs} title="New Order" />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          exact
          path="/earnings"
          element={
            <PrivateRoute>
              <Earnings />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/activity"
          element={
            <PrivateRoute>
              <Activity />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/calculators"
          element={
            <PrivateRoute>
              <Calculators />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/calender"
          element={
            <PrivateRoute>
              <Calender />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
