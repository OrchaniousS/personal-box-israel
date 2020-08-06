import React, { createContext, Component, useState, useEffect } from "react";
import { auth, generateUserDocument } from "../../firebase";

export const UserContext = createContext({ user: null });

// class UserProvider extends Component {
//   state = {
//     user: null,
//   };

//   componentDidMount = async () => {
//     auth.onAuthStateChanged(async (userAuth) => {
//       const user = await generateUserDocument(userAuth);
//       this.setState({ user });
//     });
//   };

//   render() {
//     const { user } = this.state;
//     // user && (window.location = "users");
//     return (
//       <UserContext.Provider value={user}>
//         {this.props.children}
//       </UserContext.Provider>
//     );
//   }
// }

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      setUser(await generateUserDocument(userAuth));
    });
  });

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
