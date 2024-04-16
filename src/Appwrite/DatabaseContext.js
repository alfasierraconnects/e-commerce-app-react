import React, { createContext, useEffect, useState } from "react";
import { databases } from "./appwriteConfig";
import { Query } from "appwrite";

export const DatabaseContext = createContext(null);

const DatabaseContextProvider = (props) => {
  const [all_product, setall_product] = useState([]);

  const listDocument = () => {
    let promise = databases.listDocuments(
      "661d505639bdd3d339b0",
      "661d51527496d9d30744",
      [Query.limit(40)]
    );

    promise.then(
      function (response) {
        console.log(response);
        setall_product(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    listDocument();
    // eslint-disable-next-line
  }, []);

  const contextValue = { all_product };

  return (
    <DatabaseContext.Provider value={contextValue}>
      {props.children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContextProvider;
