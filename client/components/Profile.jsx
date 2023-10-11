'use client';

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { userData } from "./context/userContext";

const Profile = () => {
  const router = useRouter();
  const pathName = usePathname();
  const profile = () => router.push('/profile')
  const { user } = useContext(userData)
  return (
    <>
    {user.email ? (
      <>
      <div className="relative w-full">
        {pathName === '/profile'?(
          <>
            <div 
              className="w-full h-40 top-0 relative bg-red-400" 
            >
              <span 
                className="bg-gray-300 hover:bg-gray-100  font-semibold duration-300 cursor-pointer px-4 py-2 rounded-lg w-fit absolute right-2 bottom-2"
              >
                Change bg
              </span>
            </div>
            <div className="w-40 h-40 bg-white rounded-full absolute top-16 left-5 border hover:bg-gray-100 duration-300"></div>
          </>
        ):(
          <>
            <div 
              className="w-full h-32 top-0 bg-red-400" 
            ></div>
            <div className="w-40 h-40 bg-white rounded-full absolute top-10 left-5 border"></div>
          </>
        )}

        <div className="flex justify-end p-3 relative">
          {pathName === '/profile'&&(
            <span className="blue_btn cursor-pointer absolute">Edit Profile</span>
          )}
        </div>

      </div>
        {pathName === '/profile'?(
          <>
            <div className="mt-12 px-10">
              <div className="relative flex gap-2">
                <h1 className="font-bold text-xl">Username</h1>
              </div>
              <p>{user.email}</p>
            </div>
          </>
        ):(
          <>
            <div className="mt-14 px-10">
              <div className="relative flex gap-2">
                <h1 className="font-bold text-xl cursor-pointer" onClick={()=> profile()}>Username</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 fill-blue-600 cursor-pointer"
                >
                  <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                </svg>
              </div>
              <p>{user.email}</p>
            </div>
          </>
        )}
    </>
    ):(
      <span>Signin</span>
    )}
    </>
  );
};

export default Profile;
