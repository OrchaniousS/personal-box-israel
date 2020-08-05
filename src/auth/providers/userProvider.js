import React, { createContext, Component } from "react";
import { auth, generateUserDocument } from "../../firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: null,
  };
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   auth.onAuthStateChanged(async (userAuth) => {
  //     const user = await generateUserDocument(userAuth);
  //     setUser(user);
  //   });
  // }, []);

  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
    });
  };
  render() {
    const { user } = this.state;
    return (
      <UserContext.Provider value={user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
