import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../pages/auth.module.css";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const loginInputs = [
    { placeHolder: "אימייל", label: "email" },
    { placeHolder: "סיסמה", label: "password" },
  ];

  const loginContainer = (
    <div className={styles.inputContainer}>
      <form>
        {loginInputs.map((input, index) => (
          <label key={index} htmlFor={input.label}>
            <input
              id={input.label}
              name={input.label}
              placeholder={input.placeHolder}
              onChange={(event) => onChangeHandler(event)}
            ></input>
          </label>
        ))}
        <button
          onClick={(event) => {
            signInWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          התחבר
        </button>
      </form>
      <div>
        <div>או</div>
        <button>התחבר עם גוגל</button>
        <div>
          אין לך משתמש? <Link to="signUp">הרשם כאן</Link> <br />{" "}
          <Link to="passwordReset">שכחת סיסמה?</Link>
        </div>
      </div>
      {/* filter the user to user page via user type */}
    </div>
  );
  return (
    <React.Fragment>
      <div className={styles.titleUserSign}>
        <h2>התחברות</h2>
      </div>
      {error !== null && <div>{error}</div>}
      {loginContainer}
    </React.Fragment>
  );
};

export default SignIn;
