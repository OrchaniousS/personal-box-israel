import React from "react";

import PlacesList from "../components/placesList";
import styles from "./places.module.css";

const Places = (props) => {
  return (
    <div className={styles.placesContainer}>
      <PlacesList />
    </div>
  );
};

export default Places;
