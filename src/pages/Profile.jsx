import { useNavigate } from "react-router-dom";

export default function Profile(prop) {
  const navigaion = useNavigate();
  const { setLoggedIn } = prop;
  return (
    <div className="profile">
      <button
        onClick={() => {
          return setLoggedIn(false), navigaion("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
}
