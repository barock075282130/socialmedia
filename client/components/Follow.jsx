"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Follow = ({ data }) => {
  const img = "/profile.png";
  const router = useRouter();
  const loopData = () => {
    if(!data){
      return <div className="flex justify-center">
        <h1>No Follower</h1>
      </div>
    }
    return data.following.map((item) => (
      <div
        key={item.username}
        className="flex gap-2 my-2 mx-4 cursor-pointer"
        onClick={() => router.push(`/profile/${item.username}`)}
      >
        <div>
          {item.profileimg ? (
            <Image
              src={item.profileimg}
              alt={`profile_${item.username}`}
              width={100}
              height={100}
            />
          ) : (
            <Image src={img} alt={`profile_${img}`} width={100} height={100} />
          )}
        </div>
        <div className="flex flex-col">
          <p className=" font-bold text-lg">{item.username}</p>
          <p className="text-gray-400">{item.email}</p>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <h1 className="flex justify-center text-2xl font-semibold mt-5">
        Following
      </h1>
      {loopData()}
    </div>
  );
};

export default Follow;
