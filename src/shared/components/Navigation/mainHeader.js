import React from "react";

import styles from "./mainHeader.module.css";

const MainHeader = (props) => {
  return <div className={styles.mainHeader}>{props.children}</div>;
};

export default MainHeader;
