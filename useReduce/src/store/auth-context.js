import React, { useState, useEffect } from "react";

// NOTE: Context is good for low frecuency changes (stated by react member)

// Important to have set the function prototypes on the AuthContext.
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // Dumy function for better IDE auto-completion
  onLogin: (email, password) => {},
});

// This component here provides the Context for the login and logout for the whole app.
// This way we get a leaner App.js file where we focus on what is more important.
// We can use this "component" on index.js to have one general Context manager for the whole app.
export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
