import React, { useState, useContext, useEffect } from "react";
import LoginHeader from "../../header_footer/GeneralHeader";
import Footer from "../../header_footer/Footer";
import Content from "./ContentLogin";

const Login = (props) => {
  return (
    <div>
      <LoginHeader />
      <Content />
      <Footer />
    </div>
  );
};

export default Login;
