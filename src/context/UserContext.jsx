import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [errorMes, setErrorMes] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("currentUser"))
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  function logInHandler(e) {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    axios
      .post("http://localhost:2000/user-log-in", {
        username,
        password,
      })
      .then(
        (res) => (
          setCurrentUser(res.data),
          localStorage.setItem("currentUser", JSON.stringify(res.data)),
          navigate("/")
        )
      )
      .catch((res) => setErrorMes(res.response.data.message));
  }

  function logOutHandler() {
    localStorage.removeItem("currentUser");
    navigate("/");
    location.reload();
  }

  return (
    <UserContext.Provider
      value={{ logInHandler, logOutHandler, currentUser, errorMes }}
    >
      {children}
    </UserContext.Provider>
  );
}
