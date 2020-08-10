import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import MainNav from "../../shared/components/Navigation/mainNav";
import Card from "../../shared/components/Card";
import { UserContext } from "../providers/userProvider";

import PasswordReset from "./PasswordReset";
import Places from "../../places/pages/places";
import Home from "../../home/pages/home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProfile from "../../user/pages/user";
import styles from "../../app.module.css";

// export const user = null;

function Auth() {
  const user = useContext(UserContext);
  return (
    <Router>
      <MainNav />
      <Switch>
        <div className={styles.app}>
          <Card type="father">
            {user ? (
              <React.Fragment>
                <Route path="/users" component={UserProfile} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
              </React.Fragment>
            )}
            <Route path="/passwordReset" component={PasswordReset} />
            <Route path="/places" component={Places} />
            <Route exact path="/" component={Home} />
            <Redirect exact to="/" />
          </Card>
        </div>
      </Switch>
    </Router>
  );
}

export default Auth;
