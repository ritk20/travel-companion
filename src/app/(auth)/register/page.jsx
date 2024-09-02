"use client";
import React from "react";
import LoginTemplate from "@/ui/templates/LoginPage";
import Provider from "@/context/Provider";

const Register = () => {
  return (
    <Provider>
      <LoginTemplate type="register" />
    </Provider>
  );
};

export default Register;
