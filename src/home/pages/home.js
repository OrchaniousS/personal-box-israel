import React, { useContext } from "react";

import { UserContext } from "../../auth/providers/userProvider";
import styles from "./home.module.css";

const Home = (props) => {
  const user = useContext(UserContext);
  return (
    <div className={styles.mainContainer}>
      <p>Personal Box Containers israel</p>
      <div className={styles.greetingSection}>
        {` ברוכים הבאים ללורם איפסום שלום `}
        {user ? user.firstName + " " + user.lastName : "אורח/ת"}
      </div>
    </div>
  );
};

export default Home;
