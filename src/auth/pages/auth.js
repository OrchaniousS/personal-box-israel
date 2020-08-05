import React, { useContext } from "react";
// import { Link, Router } from "react-router-dom";

import PasswordReset from "../components/PasswordReset";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import UserProfile from "../../user/pages/user";
import { UserContext } from "../providers/userProvider";

// import styles from "./auth.module.css";

export const User = null;

function Auth() {
  const User = useContext(UserContext);
  return (
    <div>
      <p>Personal Box Containers israel</p>
      {User ? (
        <UserProfile />
      ) : (
        <React.Fragment>
          <SignUp />
          <SignIn />
          <PasswordReset />
        </React.Fragment>
      )}
      {/* <User status={user} /> */}
    </div>
  );
}

export default Auth;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";

// import "./firebase";
// import UserProvider from "./auth/providers/userProvider";
// import Auth from "./auth/pages/auth";
// import SignIn from "./auth/components/SignIn";
// import SignUp from "./auth/components/SignUp";
// import Places from "./places/pages/places";
// import Home from "./home/pages/home";
// import UserProfile from "./user/pages/user";

// import MainNav from "./shared/components/Navigation/mainNav";
// import Card from "./shared/components/Card";
// import styles from "./app.module.css";
// import PasswordReset from "./auth/components/PasswordReset";

// const App = () => {
//   return (
//     <UserProvider>
//       <Router>
//         <MainNav />
//         <Switch>
//           <div className={styles.app}>
//             <Card>
//               <Route path="/auth" component={Auth} />
//               <Route path="/signin" component={SignIn} />
//               <Route path="/signup" component={SignUp} />
//               <Route path="/passwordReset" component={PasswordReset} />
//               <Route path="/users" component={UserProfile} />
//               <Route path="/places" component={Places} />
//               <Route exact path="/" component={Home} />
//               <Redirect exact to="/" />
//             </Card>
//           </div>
//         </Switch>
//       </Router>
//     </UserProvider>
//   );
// };

// export default App;
