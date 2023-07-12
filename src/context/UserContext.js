import { createContext, useState, useContext } from "react";

const UserContext = createContext();
const newUserContext = createContext();

//Custom Hook for context
export const useUserContext = () => {
  return useContext(UserContext);
};

//Custom Hook for context
export const useNewUserContext = () => {
  return useContext(newUserContext);
};

//Provider
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { name: "abel", email: "abel@mit.edu", password: "secret", balance: 100 }
  ]);

  const setNewUser = (user) => {
    setUsers(prevUsers => [...prevUsers, { name: user.name, email:user.email, password:user.password, balance:0 }])
  };

  return (
    <UserContext.Provider value={users}>
      <newUserContext.Provider value={setNewUser}>
        {children}
      </newUserContext.Provider>
    </UserContext.Provider>
  );
};
