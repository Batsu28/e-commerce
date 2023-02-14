import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../Components/icons/MainLogo";
import "../styles/login.css";

export default function LogIn() {
  const [currentUser, setCurrentUser] = useState();
  const [errorMes, setErrorMes] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("currentUser"))
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  function logInHandler(e) {
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
  console.log(currentUser);

  return (
    <div className="login">
      <div onClick={() => navigate("/")} className="login_close"></div>
      <form className="login_box" onSubmit={logInHandler}>
        <div className="login_logo">
          <MainLogo />
        </div>
        <div className="login_inputs">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
        </div>
        {errorMes && <p>{errorMes}</p>}
        <button type="submit" className="login_btn">
          Log In
        </button>
        <p className="or_line">
          <span>OR</span>
        </p>
        <input type="button" className="signup_btn" value="Sign Up" readOnly />
      </form>
    </div>
  );
}
