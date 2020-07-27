import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./mainHeader";
import NavLinks from "./navLinks";
import SideDrawer from "./sideDrawer";
import styles from "./mainNav.module.css";
import Backdrop from "../UIElements/Backdrop";

const MainNav = (props) => {
  const [drawer, setDrawer] = useState(false);

  const drawerHandler = () => {
    setDrawer(true);
  };

  const drawerBlurHandler = () => {
    setDrawer(false);
  };

  return (
    <React.Fragment>
      {drawer && <Backdrop onClick={drawerBlurHandler} />}
      <SideDrawer show={drawer} onClick={drawerBlurHandler}>
        <nav className={styles.mainNavSideDrawer}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button onClick={drawerHandler} className={styles.mainNavButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className={styles.mainNavTitle}>
          <Link to="/">Box Israel</Link>
        </h1>
        <nav className={styles.mainNavHeaderNav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNav;
