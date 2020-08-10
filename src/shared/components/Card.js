import React from "react";

import styles from "./card.module.css";

const Card = (props) => {
  const { type } = props;
  const styleCardHandler = () =>
    type === "child" ? (
      <div className={styles.cardContainerChild}>{props.children}</div>
    ) : (
      <main>
        <div className={styles.cardContainer}>{props.children}</div>
      </main>
    );

  return <>{styleCardHandler()}</>;
};

export default Card;
