import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../pages/auth.module.css";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerInputs = [
    { placeHolder: "אימייל", label: "email" },
    { placeHolder: "סיסמה", label: "password" },
    { placeHolder: "שם פרטי", label: "firstName" },
    { placeHolder: "שם משפחה", label: "lastName" },
    { placeHolder: "מספר טלפון", label: "phoneNumber" },
  ];

  const registerContainer = (
    <div className={styles.inputContainer}>
      <form>
        {registerInputs.map((input, index) => (
          <label key={index} htmlFor={input.label}>
            <input
              id={input.label}
              name={input.label}
              placeholder={input.placeHolder}
            ></input>
          </label>
        ))}
      </form>
      <div>
        <Link to="/user"> המשך הלאה</Link>
      </div>
    </div>
  );
  return <div>{registerContainer}</div>;
};

export default SignUp;
