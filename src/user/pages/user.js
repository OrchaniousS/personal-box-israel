import React, { useState } from "react";
import { Link } from "react-router-dom";
import QrReader from "react-qr-reader";

import styles from "./user.module.css";

const User = (porps) => {
  const [result, setResult] = useState("עדיין לא נסרק");
  const [isQRcodeActive, setqrcodeActive] = useState(false);

  const handleQrScan = (data) => {
    data && setResult(data);
  };

  const handleQrError = (err) => {
    console.error(err);
  };

  const QRcode = (
    <React.Fragment>
      <QrReader
        delay={300}
        onError={handleQrError}
        onScan={handleQrScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </React.Fragment>
  );

  const userPageTitle = (
    <div className={styles.userTitle}>
      <div>
        <p>הפרופיל שלי</p>
      </div>
      <div>
        <Link to="/">
          <p>התנתקות</p>
        </Link>
      </div>
    </div>
  );

  const demoUser = [
    {
      phoneNumber: "enteredText",
      firstName: "enteredText",
      lastName: "Hans",
      email: "superHans@gmail.com",
    },
  ];

  const userInfo = (
    <div className={styles.userInfo}>
      {/* <h1> פרטי המשתמש</h1> */}
      {demoUser.map(({ phoneNumber, firstName, lastName, email }) => (
        <div key={Math.random().toString()}>
          <h2>{firstName + " " + lastName}</h2>
          <div>מספר הטלפון: {phoneNumber}</div>
          <div>אימייל: {email}</div>
        </div>
      ))}
    </div>
  );

  const boxMap = (
    <div className={styles.boxGoogleMaps}>
      <Link to="/places">אל מיקומי הלוקרים</Link>
    </div>
  );

  return (
    <div className={styles.userContainer}>
      {userPageTitle}
      {userInfo}
      {
        <div className={styles.qrCodeContainer}>
          <div>
            <div> סרוק את קוד הQR כאן: </div>
            <label onClick={() => setqrcodeActive(true)} htmlFor="qrCODE">
              הפעל את המצלמה
            </label>
          </div>
          {isQRcodeActive && QRcode}
        </div>
      }
      {boxMap}
    </div>
  );
};

export default User;

// const qrCodeCamera = (
//   <div className={styles.qrCodeContainer}>
//     <div> סרוק את קוד הQR כאן: </div>
//     <div>
//       <input
//         title="f"
//         placeholder="צלם תמונה"
//         id="qrCODE"
//         name="QRcode"
//         type="file"
//         accept="image/*"
//         capture="camera"
//       />
//       <label htmlFor="qrCODE">הפעל את המצלמה</label>
//     </div>
//   </div>
// );
