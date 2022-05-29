import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// This way we can get the information of Context on the whole app.
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
