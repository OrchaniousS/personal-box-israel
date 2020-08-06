import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../../auth/providers/userProvider";
import { auth } from "../../../firebase";

import styles from "./navLinks.module.css";

const NavLinks = (props) => {
  const User = useContext(UserContext);
  return (
    <ul className={styles.navLinks}>
      <li>
        <NavLink to="/" exact>
          בית
        </NavLink>
      </li>
      <li>
        <NavLink to="/places">מיקומי הלוקר</NavLink>
      </li>
      <React.Fragment>
        {!User ? (
          <NavLink to="/signin">התחברות</NavLink>
        ) : (
          <React.Fragment>
            <li>
              <NavLink to="/users">הפרופיל שלי</NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  auth.signOut();
                }}
                to="/"
              >
                התנתקות
              </NavLink>
            </li>
          </React.Fragment>
        )}
      </React.Fragment>
    </ul>
  );
};
export default NavLinks;
