import React from "react";
import { useAuthStore } from "../store/useAuthStore";

const ChatPage = () => {
  const { logout } = useAuthStore();
  return (
    <div className="z-10">
      chat
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default ChatPage;
