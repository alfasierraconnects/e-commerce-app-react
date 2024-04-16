import { useContext, createContext, useEffect, useState } from "react";
import { account } from "./appwriteConfig";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserStatus();
    // eslint-disable-next-line
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      // eslint-disable-next-line
      let response = await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password
      );
      console.log(response);

      let accountDetails = await account.get();
      console.log(accountDetails);
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const checkUserStatus = async () => {
    setLoading(true);
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
      console.log(accountDetails);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const contextValue = {
    user,
    loginUser,
    logoutUser,
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
