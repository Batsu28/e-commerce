import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigaion = useNavigate();

  return (
    <div className="profile">
      <button
        onClick={() => {
          return navigaion("/"), localStorage.removeItem("currentUser");
        }}
      >
        Log Out
      </button>
    </div>
  );
}
