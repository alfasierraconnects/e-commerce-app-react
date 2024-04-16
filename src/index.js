import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./context/ShopContext";
import { AuthContextProvider } from "./Appwrite/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ShopContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ShopContextProvider>
  </AuthContextProvider>
);
