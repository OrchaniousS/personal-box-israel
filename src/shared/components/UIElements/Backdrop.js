import React from "react";
import ReactDOM from "react-dom";

import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.backDrop} onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
