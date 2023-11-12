"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useSearchParams } from "next/navigation";
import { userData } from "./context/userContext";
import EditProfile from "./EditProfile";
import UserProfile from "./UserProfile";
import ProfileImage from "./profile/ProfileImage";
import BackgroundImage from "./profile/BackgroundImage";

const OtherUser = ({ currentUser, params, path }) => {
  if (currentUser !== params && path === "/profile") {
    return <UserProfile name={params} />;
  }
};

const Profile = () => {
  const { user } = useContext(userData);
  const params = useSearchParams();
  const username = params.get("name");
  const pathName = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <OtherUser
        currentUser={user?.username}
        params={username}
        path={pathName}
      />
      {user?.username === username && (
        <>
          <div className="relative">
            <button
              className="bg-gray-300/40 hover:bg-gray-300 duration-300 rounded-full w-8 h-8 m-2 absolute"
              onClick={() => router.push("/")}
            >
              {"<-"}
            </button>
            <div className="w-full">
              <BackgroundImage />
            </div>
            <div className="absolute top-20 left-5">
              <ProfileImage user={user} router={router}/>
            </div>
            <EditProfile setOpen={setOpen} open={open} />
          </div>
          <div className="h-20 pl-28">
            <span className="flex pt-2 font-semibold text-xl">
              {user.username}
            </span>
            <span className="text-gray-400">@{user.email.split("@")[1]}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
