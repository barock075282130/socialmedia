"use client";

import useFollow from "@hooks/follow";
import { userData } from "./context/userContext";
import { Suspense, useContext } from "react";

const HandleFollow = ({ userinfo, handleFollow, handleUnFollow }) => {
  const { user } = useContext(userData);
  const { follow } = useFollow(user?.userId);
  if (!follow) {
    return <Suspense fallback={<p>loading</p>}>Loading Data ...</Suspense>;
  } else if (follow) {
    for (let i = 0; i < follow.following.length; i++) {
      const has = follow.following.some(
        (fol) => fol.username === userinfo.data.username
      );
      if (has) {
        return (
          <button
            onClick={() => handleUnFollow(userinfo?.data?.username)}
            className=" bg-black text-white rounded-full h-10 w-80 hover:bg-black/80"
          >
            Unfollow
          </button>
        );
      } else if (!has || !follow) {
        return (
          <button
            onClick={() => handleFollow(userinfo?.data?.username)}
            className=" bg-black text-white rounded-full h-10 w-80 hover:bg-black/80"
          >
            Follow
          </button>
        );
      }
    }
  }
};

export default HandleFollow;
