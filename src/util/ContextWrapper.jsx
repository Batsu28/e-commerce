import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function Handlers({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [logInuser, setLogIn] = useState();
  const [products, setProducts] = useState([]);

  return (
    <>
      <DataContext.Provider
        value={{ isLoggedIn, setLoggedIn, products, setProducts }}
      ></DataContext.Provider>
    </>
  );
}
