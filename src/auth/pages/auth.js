import React from "react";
import { Link } from "react-router-dom";

import styles from "./auth.module.css";

export const User = null;

const Auth = (props) => {
  const registerInputs = [
    { placeHolder: "מספר טלפון", label: "phoneNumber" },
    { placeHolder: "סיסמה", label: "password" },
    { placeHolder: "שם פרטי", label: "firstName" },
    { placeHolder: "שם משפחה", label: "lastName" },
    { placeHolder: "אימייל", label: "email" },
  ];

  const loginInputs = [
    { placeHolder: "מספר טלפון", label: "phoneNumber" },
    { placeHolder: "סיסמה", label: "password" },
  ];

  const loginContainer = (
    <div className={styles.inputContainer}>
      {loginInputs.map((input, index) => (
        <label key={index} htmlFor={input.label}>
          <input
            id={input.label}
            name={input.label}
            placeholder={input.placeHolder}
          ></input>
        </label>
      ))}

      <div>
        <Link to="/user"> המשך הלאה</Link>
      </div>
      {/* filter the user to user page via user type */}
    </div>
  );

  const registerContainer = (
    <div className={styles.inputContainer}>
      {registerInputs.map((input, index) => (
        <label key={index} htmlFor={input.label}>
          <input
            id={input.label}
            name={input.label}
            placeholder={input.placeHolder}
          ></input>
        </label>
      ))}
      <div>
        <Link to="/user"> המשך הלאה</Link>
      </div>
    </div>
  );
  return (
    <div>
      <p>Personal Box Containers israel</p>
      {User ? registerContainer : loginContainer}
      {/* <User status={user} /> */}
    </div>
  );
};

export default Auth;
