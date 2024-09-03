"use client";
import Provider from "@/context/Provider";
import ChatPage from "@/ui/templates/ChatPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to the homepage or any other page if the user is logged in
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>; // Show a loading state while checking the session
  }
  console.log(session);
  return (
    <Provider>
      <ChatPage />
    </Provider>
  );
}
