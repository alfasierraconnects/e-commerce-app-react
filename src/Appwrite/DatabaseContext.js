import React from "react";
import { databases } from "./appwriteConfig";
import { ID } from "appwrite";

const DatabaseContextProvider = (props) => {
  const addDocuments = () => {
    const promise = databases.createDocument(
      "<DATABASE_ID>",
      "<COLLECTION_ID>",
      ID.unique(),
      { title: "Hamlet" }
    );

    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  const contextValue = { addDocuments };

  return (
    <DatabaseContext.Provider value={contextValue}>
      {props.children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContextProvider;
