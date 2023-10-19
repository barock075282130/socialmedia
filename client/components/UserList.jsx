"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { userData } from "./context/userContext";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const router = useRouter();
  const { user } = useContext(userData);
  const gotoUser = (username) => router.push(`/profile?name=${username}`);
  useEffect(() => {
    if (user.userId) {
      const fetchUser = async () => {
        try {
          const getUser = await fetch(`http://localhost:4000/acc/${user.username}`,{
              method: "GET",
            }
          );
          const json = await getUser.json();
          setUserList(json);
        } catch (error) {
          console.log(error);
        }
      };
      fetchUser();
    }else{
      const fetchAll = async () => {
        try {
          const getUser = await fetch(`http://localhost:4000/acc`,{
              method: "GET",
            }
          );
          const json = await getUser.json();
          setUserList(json);
        } catch (error) {
          console.log(error);
        }
      };
      fetchAll();
    }
  }, [user]);
  return (
    <>
      <div className="mt-2">
        {userList
          ? userList.map((data, i) => (
              <div
                className="flex justify-between p-2 border my-1 rounded-lg hover:bg-gray-100 cursor-pointer duration-300"
                key={i}
                onClick={() => gotoUser(data.username)}
              >
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-white border rounded-full"></div>
                  <div className="flex flex-col px-3">
                    <span className="font-semibold">{data.username}</span>
                    <span className="text-sm text-gray-400">{data.email}</span>
                  </div>
                </div>
                {user?.userId&&(
                  <div className="flex items-center justify-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                      className="w-7 h-7 fill-blue-600 hover:fill-blue-300 duration-300 mx-2"
                    >
                      <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                    </svg>
                  </div>
                )}
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default UserList;
