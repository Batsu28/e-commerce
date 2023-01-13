import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import { MENUS1, MENUS2, users } from "./util/data";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [logInuser, setLogIn] = useState(users);
  const [appendMENUS, setappendMENUS] = useState(MENUS1);
  const [route, setRoute] = useState(MENUS1[2]);
  const [changeLogIn, setChangeLogIn] = useState(<LogIn check={checkLogIn} />);

  function checkLogIn(username, password) {
    logInuser.map((user) => {
      if (user.username === username && user.password === password) {
        console.log("logged in");
        setLoggedIn(true);
        setappendMENUS(MENUS2);
        setRoute(MENUS2[2]);
        setChangeLogIn(<Profile setLoggedIn={setLoggedIn} />);
      } else {
        console.log("n");
      }
    });
  }

  console.log(appendMENUS);
  console.log(route);
  console.log(changeLogIn);
  return (
    <div className="App">
      <Header MENUS={appendMENUS} />
      <Routes>
        <Route path={MENUS1[0].url} element={<Home />} />
        <Route path={MENUS1[1].url} element={<About />} />
        <Route path={route.url} element={changeLogIn} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
