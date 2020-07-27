import React from "react";

import Input from "../../shared/components/formElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import styles from "./auth.module.css";

const Auth = (props) => {
  return (
    <div className={styles.authentication}>
      <div className={styles.authenticationHeader}>
        <h2>אנא התחבר</h2>
        <hr />
      </div>
      <form>
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email"
        />
      </form>
    </div>
  );
};

export default Auth;
