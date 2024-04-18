import { useContext, createContext, useEffect, useState } from "react";
import { account } from "./appwriteConfig";
import { ID } from "appwrite";
import { ShopContext } from "../context/ShopContext";
import { databases } from "./appwriteConfig";
import { Query } from "appwrite";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const { cartItems, setCartItems, addToCart } = useContext(ShopContext);

  useEffect(() => {
    checkUserStatus();
    // eslint-disable-next-line
  }, []);

  const fetchCartItems = async (userId) => {
    const query = [Query.equal("userId", userId)];
    const cartResponse = await databases.listDocuments(
      "661d505639bdd3d339b0",
      "661f838acdfcfa05010d",
      query
    );
    return JSON.parse(cartResponse.documents[0]["cart-items"]);
  };

  const loginUser = async (userInfo) => {
    try {
      await account.createEmailSession(userInfo.email, userInfo.password);
      const accountDetails = await account.get();
      setUser(accountDetails);

      const fetchedCartItems = await fetchCartItems(accountDetails.$id);
      fetchedCartItems.forEach((el) => {
        if (el.quantity !== 0) addToCart(el.ItemId, el.size, el.quantity);
      });
    } catch (error) {
      toast.error("Invalid Credentials! Enter Valid EmailId and Password.");
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    const accountDetails = await account.get();
    const cartItemsJson = JSON.stringify(cartItems);
    await account.deleteSession("current");

    try {
      const promise = databases.updateDocument(
        "661d505639bdd3d339b0",
        "661f838acdfcfa05010d",
        accountDetails.$id,
        { userId: accountDetails.$id, "cart-items": cartItemsJson }
      );

      promise.then(
        function (response) {
          // console.log(response);
          setCartItems([]); // Success
        },
        function (error) {
          // console.log(error); // Failure
        }
      );
    } catch (error) {
      toast.error("Error logging out!");
    }
    setUser(null);
    setLoading(false);
  };

  const signupUser = async (userInfo) => {
    setLoading(true);
    try {
      // const accountResponse =
      await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name,
        userInfo.phone
      );
      toast("Created a new Account. Hurray!");

      await account.createEmailSession(userInfo.email, userInfo.password);
      const accountDetails = await account.get();
      setUser(accountDetails);

      const cartItemsJson = JSON.stringify(cartItems);
      await databases.createDocument(
        "661d505639bdd3d339b0",
        "661f838acdfcfa05010d",
        accountDetails.$id,
        { userId: accountDetails.$id, "cart-items": cartItemsJson }
      );
    } catch (error) {
      toast.error("Unable to signup.");
    } finally {
      setLoading(false);
    }
  };

  const checkUserStatus = async () => {
    setLoading(true);
    try {
      const accountDetails = await account.get();
      setUser(accountDetails);
      const fetchedCartItems = await fetchCartItems(accountDetails.$id);
      fetchedCartItems.forEach((el) => {
        if (el.quantity !== 0) addToCart(el.ItemId, el.size, el.quantity);
      });
    } catch (error) {
      // console.log("Check user status error:", error);
    } finally {
      setLoading(false);
    }
  };

  const contextValue = {
    user,
    loginUser,
    logoutUser,
    signupUser,
    checkUserStatus,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? <p>Loading...</p> : props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
