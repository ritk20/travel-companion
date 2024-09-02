// LoginForm.jsx
import React, { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import Texts from "../atoms/Texts";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      router.push("/");
      console.log("Email:", email);
      console.log("Password:", password);
    } else {
      alert("Failed to login");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center p-10 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-md bg-yellow-"
    >
      <FormField
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>

      <Texts type="info">
        Not a user?<a>Sign-Up Now</a>
      </Texts>
    </form>
  );
};

export default LoginForm;
