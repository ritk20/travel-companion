// LoginTemplate.jsx
import React from "react";
import LoginForm from "../organisms/LoginForm";
import SignupForm from "../organisms/SignupForm";

const LoginTemplate = ({ type }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200">
      {type === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default LoginTemplate;
