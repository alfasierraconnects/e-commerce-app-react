import React, { createContext, useEffect, useState } from "react";
import { databases } from "./appwriteConfig";
import { Query } from "appwrite";
import { ID } from "appwrite";
import { toast } from "react-toastify";

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
        // console.log(response);
        setall_product(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  };

  const createDocument = (document) => {
    // const documentString = JSON.stringify(document);
    console.log(document);
    const promise = databases.createDocument(
      "661d505639bdd3d339b0",
      "661f83b30614ff9e22d6",
      ID.unique(),
      document
    );

    promise.then(
      function (response) {
        // console.log(response);
        toast.success("Your order is Successful.");
        toast.success("We are redirecting you to order page.");
      },
      function (error) {
        // console.log(error);
        toast.error("Sorry! we are unable to create your order.");
      }
    );
  };

  useEffect(() => {
    listDocument();
    // eslint-disable-next-line
  }, []);

  const contextValue = { all_product, createDocument };

  return (
    <DatabaseContext.Provider value={contextValue}>
      {props.children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContextProvider;
