import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

import styles from "../pages/auth.module.css";

const PasswordReset = (props) => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "email") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("שגיאה בעת איפוס הסיסמה");
      });
  };

  const resetEmailHolder = (
    <div className={styles.passwordResetContainer}>
      <div className={styles.titleUser}>
        <h2>איפוס הסיסמה</h2>
      </div>
      <div className={styles.formContainer}>
        <form action="">
          {emailHasBeenSent && <div>נשלח אליך אימייל</div>}
          {error !== null && <div>{error}</div>}
          <label htmlFor={email}>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="אנא הכנס את האימייל"
              onChange={onChangeHandler}
            />
          </label>
          <button
            onClick={(event) => {
              sendResetEmail(event);
            }}
          >
            שלח לי לינק לאיפוס
          </button>
        </form>
        <div>
          <Link to="/signin">בחזרה אל דף ההתחברות</Link>
        </div>
      </div>
    </div>
  );

  return <React.Fragment>{resetEmailHolder}</React.Fragment>;
};

export default PasswordReset;
