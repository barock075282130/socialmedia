"use client";

import Link from "next/link";
import { useContext } from "react";
import { userData } from "./context/userContext";
import { useRouter } from "next/navigation";

const CheckUserLogin = ({ user, address, func }) => {
  const router = useRouter();
  const signIn = () => router.push("/auth/signin");
  if (!user?.userId) {
    return (
      <div className="flex justify-center items-center h-full">
        <button
          className="py-3 px-6 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-100 hover:text-blue-600 duration-300"
          onClick={() => signIn()}
        >
          Signin
        </button>
      </div>
    );
  }
  return (
    <aside className="fixed h-screen p-5">
      <ul className="grid h-full w-56  content-between gap-3 ">
        <div className="text-xl">
          <li>
            <Link href={`/profile/${user?.username}`}>Profile</Link>
          </li>
          <li>
            <Link href={`/follow/${user?.userId}`}>Follow</Link>
          </li>
        </div>
        <div>
          <li>
            <button
              onClick={func}
              className="flex justify-center py-3 w-full bg-red-600 rounded-lg duration-300 hover:bg-red-100 hover:text-red-600  text-white gap-1"
            >
              Logout via <p className="font-semibold">@{address}</p>
            </button>
          </li>
        </div>
      </ul>
    </aside>
  );
};

const Sidebar = () => {
  const { user, Logout } = useContext(userData);
  const address = user?.email?.split("@")[1];
  return <CheckUserLogin user={user} address={address} func={Logout} />;
};

export default Sidebar;
