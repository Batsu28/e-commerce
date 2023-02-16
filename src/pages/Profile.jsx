import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { logOutHandler } = useContext(UserContext);

  return (
    <div className="profile">
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
}
