import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function LogIn(prop) {
  const { check } = prop;
  const navigate = useNavigate();

  function LogInHandler(e) {
    e.preventDefault();
    check(e.target.username.value, e.target.password.value);
    navigate("/");
  }
  return (
    <div className="login">
      <div onClick={() => navigate("/")} className="login_close"></div>
      <form className="login_box" onSubmit={LogInHandler}>
        <div className="login_inputs">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
        </div>
        <div className="login_btn">
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}
