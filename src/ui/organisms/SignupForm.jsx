"use client";

import React, { useState, useEffect } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Texts from "../atoms/Texts";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignupForm = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const router = useRouter();

  // Redirect user if they are already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/"); // Redirect to homepage or any other page
    }
  }, [status, router]);

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
        name="name"
        value={name}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
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

export default SignupForm;
