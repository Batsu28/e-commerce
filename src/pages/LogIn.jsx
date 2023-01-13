import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function LogIn(prop) {
  const { check } = prop;
  const navigate = useNavigate();

  function LogInHandler(e) {
    e.preventDefault();
    check(e.target.username.value, e.target.password.value);
    navigate("/profile");
  }
  return (
    <div className="login">
      <form className="login_box" onSubmit={LogInHandler}>
        <div className="login_inputs">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
        </div>
        <div className="login_btn">
          <button type="submit">Log In</button>
          <input type="button" value={"register"} />
        </div>
      </form>
    </div>
  );
}
