import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function LogIn(prop) {
  const { checkLogIn } = prop;
  const navigate = useNavigate();

  function LogInHandler(e) {
    e.preventDefault();
    checkLogIn(e.target.username.value, e.target.password.value);
  }
  return (
    <div className="login">
      <div onClick={() => navigate("/")} className="login_close"></div>
      <form className="login_box" onSubmit={LogInHandler}>
        <div className="login_logo">
          <img src="./image/loginLogo.png" alt="" />
        </div>
        <div className="login_inputs">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
        </div>

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
