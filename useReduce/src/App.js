import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const ctx = useContext(AuthContext);

  // In this case we are forwarding a lot of data through a lot of differents components
  // creating a props chain that shouldn't be done (not neccesarily bad, but bad practice in bigger projects).
  // One way of getting rid of this chain is to use the React Context API.
  // On AuthContext.Provider we can pass pointers to functions too.
  // In the case of Login and Home we are fordwarding the pointers because we use them directly on the component.
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
