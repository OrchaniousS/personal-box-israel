import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Admin from "./admin/pages/admin";
import User from "./user/pages/user";
// import Auth from "./auth/pages/auth";
import Auth from "./user/pages/auth";
import Places from "./places/pages/places";
import Home from "./home/pages/home";

import MainNav from "./shared/components/Navigation/mainNav";
import Card from "./shared/components/Card";
import styles from "./app.module.css";

const App = () => {
  return (
    <Router>
      <MainNav />
      <main className={styles.mainContainer}>
        <Switch>
          <Card>
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
            <Route path="/auth" component={Auth} />
            <Route path="/places" component={Places} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Card>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
