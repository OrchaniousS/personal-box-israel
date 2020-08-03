import React from "react";

import styles from "./card.module.css";

const Card = (props) => {
  return (
    <main>
      <div className={styles.cardContainer}>{props.children}</div>
    </main>
  );
};

export default Card;
