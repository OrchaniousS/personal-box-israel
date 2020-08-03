import React from "react";
import { NavLink } from "react-router-dom";

import User from "../../../auth/pages/auth";
import styles from "./navLinks.module.css";

const NavLinks = (props) => {
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
      <li>
        {User ? (
          <NavLink to="/auth">התחברות/הרשמה</NavLink>
        ) : (
          <NavLink to="/user">הפרופיל שלי</NavLink>
        )}
        {/* <NavLink to="/auth"> {User ? "התחברות" : "התנתקות"}</NavLink> */}
      </li>
      {/*if usertype is admin = show admin login*/}
    </ul>
  );
};
export default NavLinks;
