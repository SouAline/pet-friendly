import React from "react";
import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Miaut from "./Miaut";
import "../style.css";

function App() {
  return (
    <div
      id="main"
      className="d-flex align-items-center justify-content-center"
      style={{ maxWidth: "744px" }}
    >
      <div className="w-100" style={{ maxWidth: "744px" }}>
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Miaut} />
              <Route path="/login" component={Login} />
              <Route path="/signUp" component={SignUp} />
              <PrivateRoute path="/home" component={Home} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
