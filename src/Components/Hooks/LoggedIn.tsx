import React, { useState } from "react";

const LoggedIn = () => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };
  return (
    <div>
      <button
        className="btn"
        style={{ margin: "10px 0px 2px 2px" }}
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="btn"
        style={{ margin: "10px 0px 2px 2px", backgroundColor: "tomato" }}
        onClick={handleLogout}
      >
        Logout
      </button>
      <div>{login ? "LoggedOut" : "LoggedIn"}</div>
    </div>
  );
};

export default LoggedIn;
