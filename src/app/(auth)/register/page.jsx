"use client";
import React, { useEffect } from "react";
import LoginTemplate from "@/ui/templates/LoginPage";
import Provider from "@/context/Provider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Register = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      // Redirect to the homepage or any other page if the user is logged in
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading state while checking the session
  }
  return (
    <Provider>
      <LoginTemplate type="register" />
    </Provider>
  );
};

export default Register;
