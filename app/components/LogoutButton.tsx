"use client";

import React from "react";
import { signOutUser } from "../lib/signOutAuth";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await signOutUser();
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-primary">
      Log Out
    </button>
  );
};

export default LogoutButton;
