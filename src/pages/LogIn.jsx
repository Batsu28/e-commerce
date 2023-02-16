import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../Components/icons/MainLogo";
import { UserContext } from "../context/UserContext";
import "../styles/login.css";

export default function LogIn() {
  const { logInHandler, errorMes } = useContext(UserContext);

  console.log(errorMes);
  return (
    <div className="login">
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
