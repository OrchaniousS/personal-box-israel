import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../auth/providers/userProvider";

// import User from "../../../auth/pages/auth";
import styles from "./navLinks.module.css";

// export const User = null;

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
      <li>
        {!User ? (
          <NavLink to="/signin">התחברות</NavLink>
        ) : (
          <NavLink to="/users">הפרופיל שלי</NavLink>
        )}

        {/* <NavLink to="/auth"> {User ? "התחברות" : "התנתקות"}</NavLink> */}
      </li>
      {/*if usertype is admin = show admin login*/}
    </ul>
  );
};
export default NavLinks;
