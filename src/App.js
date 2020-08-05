import React from "react";
import Auth from "./auth/components/Auth";
import UserProvider from "./auth/providers/userProvider";

function App() {
  return (
    <UserProvider>
      <Auth />
    </UserProvider>
  );
}

export default App;
