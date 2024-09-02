"use client";
import ChatPage from "@/ui/templates/ChatPage";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  return <ChatPage />;
}
