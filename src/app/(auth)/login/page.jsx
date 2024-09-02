"use client";
import React from "react";
import LoginTemplate from "@/ui/templates/LoginPage";
import Provider from "@/context/Provider";

const LoginPage = () => {
  return (
    <Provider>
      <LoginTemplate type="login" />
    </Provider>
  );
};

export default LoginPage;
