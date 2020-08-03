import React from "react";
import { Link, Router } from "react-router-dom";

import PasswordReset from "../components/PasswordReset";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UserProfile from "../../user/pages/user";

import styles from "./auth.module.css";

export const User = null;

const Auth = (props) => {
  return (
    <div>
      <p>Personal Box Containers israel</p>
      {User ? (
        <UserProfile path="/user" />
      ) : (
        <React.Fragment>
          <SignUp />
          <SignIn />
        </React.Fragment>
      )}
      {/* <User status={user} /> */}
    </div>
  );
};

export default Auth;
