import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  // , signInWithGoogle
  generateUserDocument,
} from "../../firebase";

import styles from "../pages/auth.module.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (
    event,
    email,
    password
  ) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      generateUserDocument(user, { firstName, lastName, phone });
    } catch (error) {
      setError("שגיאה בעת ההרשמה עם האימייל או סיסמה");
    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "phoneNumber") {
      setPhone(value);
    }
  };

  const registerInputs = [
    { placeHolder: "אימייל", label: "email", type: "email" },
    { placeHolder: "סיסמה", label: "password", type: "password" },
    { placeHolder: "שם פרטי", label: "firstName", type: "text" },
    { placeHolder: "שם משפחה", label: "lastName", type: "text" },
    {
      placeHolder: "מספר טלפון",
      label: "phoneNumber",
      type: "tel",
      pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
    },
  ];

  const registerContainer = (
    <div className={styles.inputContainer}>
      <form>
        {registerInputs.map((input, index) => (
          <label key={index} htmlFor={input.label}>
            <input
              id={input.label}
              name={input.label}
              type={input.type}
              pattern={input.patten && input.patten}
              placeholder={input.placeHolder}
              onChange={(event) => onChangeHandler(event)}
            ></input>
          </label>
        ))}
        <button
          onClick={(event) => {
            createUserWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          הרשם
        </button>
      </form>
      <div className={styles.loginContainer}>
        {/* <div>או</div>
        <button
          onClick={() => {
            try {
              signInWithGoogle();
            } catch (error) {
              console.error("שגיאה בעת התחברות עם גוגל", error);
            }
          }}
        >
          התחבר עם גוגל
        </button> */}
        <div>
          ישלך משתמש? <Link to="signIn">התחבר כאן</Link>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className={styles.titleUser}>
        <h2>הרשמה</h2>
      </div>
      {error !== null && <div>{error}</div>}
      {registerContainer}
    </React.Fragment>
  );
};

export default SignUp;
