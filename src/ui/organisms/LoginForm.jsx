// LoginForm.jsx
"use client";
import React, { useState, useEffect } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Texts from "../atoms/Texts";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redirect user if they are already logged in
  // useEffect(() => {
  //   if (status === "authenticated") {
  //     router.push("/"); // Redirect to homepage or any other page
  //   }
  // }, [status]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("SignIn Response:", res); // Log the response for debugging

    if (res.ok) {
      router.push("/");
    } else {
      const errorMsg = res.error || "Failed to login";
      alert(errorMsg); // Provide more information if available
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center p-10 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-md"
    >
      <FormField
        label="Email"
        type="email"
        name="form"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        label="Password"
        type="password"
        name="form"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" role="button" aria-label="Login Button">
        Login
      </Button>

      <Texts type="info">
        Not a user? <a href="/register">Sign-Up Now</a>
      </Texts>
    </form>
  );
};

export default LoginForm;
