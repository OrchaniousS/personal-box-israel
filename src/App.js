import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./firebase";
import Auth from "./auth/pages/auth";
import Places from "./places/pages/places";
import Home from "./home/pages/home";
import UserProfile from "./user/pages/user";

import MainNav from "./shared/components/Navigation/mainNav";
import Card from "./shared/components/Card";
import styles from "./app.module.css";

const App = () => {
  return (
    <Router>
      <MainNav />
      <Switch>
        <div className={styles.app}>
          <Card>
            <Route path="/auth" component={Auth} />
            <Route path="/user" component={UserProfile} />
            <Route path="/places" component={Places} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Card>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
