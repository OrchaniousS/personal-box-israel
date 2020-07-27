import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/user/:uid">הפרופיל שלי</NavLink>
      </li>
      <li>
        <NavLink to="/auth">התחברות</NavLink>
      </li>
    </ul>
  );
};
export default NavLinks;
