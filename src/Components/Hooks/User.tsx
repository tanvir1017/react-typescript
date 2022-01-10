import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Tanvir Hossain",
      email: "tanvir.hossaindev1@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button
        onClick={handleLogin}
        className="btn"
        style={{ margin: "10px 0px 2px 2px", backgroundColor: "#293070" }}
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="btn"
        style={{ margin: "10px 0px 2px 2px" }}
      >
        Logout
      </button>
      <h2>User Name: - {user?.name}</h2>
      <h2>User email: - {user?.email}</h2>
    </div>
  );
};

export default User;
