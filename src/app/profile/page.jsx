"use client";
import ProfilePage from "@/ui/templates/ProfilePage";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/ui/atoms/Loader";

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to the login page if the user is not authenticated
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loader />; // Show a loading state while checking the session
  }

  return <ProfilePage />;
};

export default Profile;
