"use client"; // Ensure this component is client-side rendered

import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Texts from "../atoms/Texts";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to register");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Failed to register");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center p-10 px-14 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-lg"
    >
      <FormField
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        name="form"
        value={name}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="form"
        value={email}
        onChange={handleChange}
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="form"
        value={password}
        onChange={handleChange}
      />
      <Button type="submit" name="register">
        Register
      </Button>
      <Texts type="info">Already a member? Sign-In Now</Texts>
    </form>
  );
};

export default LoginForm;
