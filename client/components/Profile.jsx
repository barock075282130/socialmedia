"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { userData } from "./context/userContext";

const Profile = () => {
  const router = useRouter();
  const pathName = usePathname();
  const profile = (id) => router.push(`/profile?id=${id}`);
  const { user, Logout } = useContext(userData);
  const address = user?.email?.split("@")[1];
  const signIn = () => router.push("/auth/signin");
  return (
    <>
      {user.userId ? (
        <>
          <div className="h-screen sticky top-0 w-full flex flex-col justify-between">
            <div>
              {pathName === "/profile" && (
                <button 
                  className="bg-gray-300/40 hover:bg-gray-300 duration-300 rounded-full w-8 h-8 m-2 absolute"
                  onClick={()=> router.push('/')}
                >
                  {'<-'}
                </button>
              )}
              <div className="w-full h-32 top-0 bg-red-400"></div>
              <div className="w-40 h-40 bg-white rounded-full absolute top-10 left-5 border"></div>
              <div className="flex justify-end p-3 relative">
                {pathName === "/profile" && (
                  <span className="blue_btn cursor-pointer absolute">
                    Edit Profile
                  </span>
                )}
              </div>
              <div className="mt-14 px-10">
                <div className="relative flex gap-2">
                  {pathName !== "/profile" ? (
                    <h1
                      className="font-bold text-xl cursor-pointer"
                      onClick={() => profile(user.userId)}
                    >
                      {user.username}
                    </h1>
                  ) : (
                    <h1 className="font-bold text-xl">{user.username}</h1>
                  )}
                </div>
                <p>@{address}</p>
              </div>
            </div>
            {pathName !== "/profile" && (
              <div className="flex justify-center my-6">
                <button
                  onClick={Logout}
                  className="w-full mx-5 flex justify-center py-3 bg-red-600 rounded-lg duration-300 hover:bg-red-100 hover:text-red-600  text-white gap-1"
                >
                  Logout via <p className="font-semibold">@{address}</p>
                </button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-full">
          <button
            className="py-3 px-6 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-100 hover:text-blue-600 duration-300"
            onClick={() => signIn()}
          >
            Signin
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
