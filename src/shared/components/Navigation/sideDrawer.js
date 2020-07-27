import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import styles from "./sideDrawer.module.css";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
    >
      <aside onClick={props.onClick} className={styles.sideDrawer}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
