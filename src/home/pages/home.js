import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../auth/providers/userProvider";
import Card from "../../shared/components/Card";
import styles from "./home.module.css";

const Home = (props) => {
  const user = useContext(UserContext);
  return (
    <>
      <div className={styles.mainContainer}>
        <p>Personal Box Containers israel</p>
        <div className={styles.greetingSection}>
          {` ברוכים הבאים ללורם איפסום  `}
          {user ? user.firstName + " " + user.lastName : "אורח/ת"}
        </div>
      </div>
      <Card type="child">
        <div> ניווט מהיר אל</div>
        {user ? (
          <div>
            <Link to="/users">הפרופיל</Link>
          </div>
        ) : (
          <div>
            <Link to="/signin">התחברות</Link>
          </div>
        )}
        <div>
          <Link to="/places">מיקומי הלוקרים</Link>
        </div>
      </Card>
    </>
  );
};

export default Home;
