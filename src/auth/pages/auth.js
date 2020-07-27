import React from "react";
import { Link } from "react-router-dom";

import styles from "./auth.module.css";

/*check user/admin auth and show page*/

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

const buttonContainer = (
  <div className={styles.phaseContainer}>
    <div
      onClick={async () => await this.setIsActiveLogin(false)}
      className="login"
    >
      <a href="/">התחברות</a>
    </div>
    <div className="register">
      <a href="/">הרשמה</a>
    </div>
  </div>
);

const Auth = (props) => {
  return (
    <div>
      <p>Personal Box Containers israel</p>
      {document.querySelector("login")}
      {loginContainer}
      {registerContainer}
      {buttonContainer}
    </div>
  );
};

export default Auth;
