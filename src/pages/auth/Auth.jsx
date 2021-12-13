import { useState } from "react";
import { useLocation } from "react-router-dom";
import Signup from "../signup/Signup";
import Login from "../login/Login";

const Auth = () => {
  const [users, setUser] = useState([]);

  const location = useLocation();

  const handleSignup = (newUser) => {
    setUser([...users, { id: users.length + 1, ...newUser }]);
  };

  return (
    <div>
      {location.pathname === "/login" ? (
        <Login users={users} />
      ) : (
        <Signup handleSignup={handleSignup} />
      )}
    </div>
  );
};

export default Auth;
