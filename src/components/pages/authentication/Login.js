import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../context/auth/authContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  return <div>Login Page</div>;
};

export default Login;
