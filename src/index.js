import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./context/ShopContext";
import { AuthContextProvider } from "./Appwrite/AuthContext";
import DatabaseContextProvider from "./Appwrite/DatabaseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DatabaseContextProvider>
    <ShopContextProvider>
      <AuthContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthContextProvider>
    </ShopContextProvider>
  </DatabaseContextProvider>
);
