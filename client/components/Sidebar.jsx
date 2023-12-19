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
    <aside className="fixed h-screen">
      <ul className="grid h-full w-56  content-between gap-3 ">
        <div className="text-xl p-8 font-semibold">
          <li>
            <Link
              href={`/profile/${user?.username}`}
              className="flex items-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="24"
                viewBox="0 0 640 512"
              >
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>
              <p>Profile</p>
            </Link>
          </li>
          <li>
            <Link
              href={`/follow/${user?.userId}`}
              className="flex gap-3 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="24"
                viewBox="0 0 640 512"
              >
                <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
              </svg>
              <p>Follow</p>
            </Link>
          </li>
        </div>
        <div className="w-[265px]">
          <button
            onClick={func}
            className="flex justify-center w-full py-3 bg-red-600 duration-300 hover:bg-red-100 hover:text-red-600  text-white gap-1"
          >
            Logout via <p className="font-semibold">@{address}</p>
          </button>
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
