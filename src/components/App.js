import React from "react";
import SignUp from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Miaut from "./Miaut";
import Profile from "./Profile"
import Top10 from "./Top10";
import Rate from "./Rate";
import Praia from "./Praia";
import Shopping from "./Shopping";
import Clube from "./Clube";
import Praca from "./Praca";
import Hoteis from "./Hoteis";
import Confeitaria from "./Confeitaria";
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
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/top10" component={Top10} />
              <PrivateRoute path="/rate" component={Rate} />
              <PrivateRoute path="/praia" component={Praia} />
              <PrivateRoute path="/shopping" component={Shopping} />
              <PrivateRoute path="/clube" component={Clube} />
              <PrivateRoute path="/praca" component={Praca} />
              <PrivateRoute path="/hoteis" component={Hoteis} />
              <PrivateRoute path="/confeitaria" component={Confeitaria} />
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
