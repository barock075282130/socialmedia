"use client";

import { createContext, useEffect, useState } from "react";

export const userData = createContext({
  userId: undefined,
  email: undefined,
  username: undefined,
  profileImg: undefined,
  bgImg: undefined,
});

const Context = ({ children }) => {
  const [user, setUser] = useState({
    userId: undefined,
    email: undefined,
    username: undefined,
    profileImg: undefined,
    bgImg: undefined,
  });
  const Logout = async () => {
    localStorage.removeItem("x-access-token");
    window.location.reload(false);
  };
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("http://localhost:4000/userdata", {
          method: "GET",
          headers: {
            "x-access-token":
              "Bearer " + localStorage.getItem("x-access-token"),
          },
          cache: 'no-store'
        });
        if (res.ok) {
          const json = await res.json();
          setUser({
            userId: json.userId,
            email: json.email,
            username: json.username,
            profileImg: json.profileImg,
            bgImg: json.bgImg,
          });
        }
      } catch (error) {
        throw error;
      }
    };
    getUser();
  }, []);
  return (
    <userData.Provider value={{ user, Logout }}>{children}</userData.Provider>
  );
};

export default Context;
