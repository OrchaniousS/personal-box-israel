import React from "react";

import Card from "../../shared/components/Card";
import Map from "../../shared/components/UIElements/Map";
import styles from "./placesList.module.css";

const demoArr = [
  {
    title: "פארק הרצליה",
    adressHe: "יוסף נבו, הרצליה",
    adressEn: "Yosef Nebo, Herzliya",
    geoLocation: { lat: 40.7484405, lng: -73.9878584 },
    distance: "your distance-location distance",
  },
  {
    title: "מרכז הצעירים",
    adressHe: "מזאה 9, תל באביב",
    adressEn: "Maze 9, Tel Aviv",
    geoLocation: { lat: 40.7484405, lng: -73.9878584 },
    distance: "your distance-location distance",
  },
  {
    title: "עזריאלי, משרד הפנים",
    adressHe: "דרך בן גוריון 99, תל אביב",
    adressEn: "Ben Gurion Road 99, Tel Aviv",
    geoLocation: { lat: 546.5464, lng: 564654465.5464 },
    distance: "your distance-location distance",
  },
];

const PlacesList = (props) => {
  return (
    <div className={styles.placesListContainer}>
      {demoArr.length !== 0 ? (
        demoArr.map(({ title, adressHe, adressEn, geoLocation, distance }) => (
          <Card key={title}>
            <h1>{title}</h1>
            {/* {console.log(typeof parseFloat(geoLocation.lat))} */}
            <div>
              {adressHe} | {adressEn}
            </div>
            <div>{distance + " km"}</div>
            <div className={styles.mapContainer}>
              <Map />
            </div>
          </Card>
        ))
      ) : (
        <div>אין לוקרים בקרבת מקום</div>
      )}
    </div>
  );
};

export default PlacesList;
