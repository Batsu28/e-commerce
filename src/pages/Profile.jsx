export default function Profile(prop) {
  const { setLoggedIn } = prop;
  return (
    <div className="profile">
      <button
        onClick={() => {
          console.log("check");
          return setLoggedIn(false);
        }}
      >
        Log Out
      </button>
    </div>
  );
}
