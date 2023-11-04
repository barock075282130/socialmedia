"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { userData } from "./context/userContext";
import EditProfile from "./EditProfile";
import UserProfile from "./UserProfile";
import UploadProfileImage from "./UploadProfile";

const OtherUser = ({ currentUser, params, path }) => {
  if (currentUser !== params && path === "/profile") {
    return <UserProfile name={params} />;
  }
};

const OpenImg = ({
  img,
  open,
  setOpen,
  setProfile,
  profile,
  preProfile,
  setPreProfile,
  user,
}) => {
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const blob = new Blob([file]);
      const ImgObject = URL.createObjectURL(blob);
      if (!user?.profileImg) {
        setPreProfile(ImgObject);
      }
      setProfile(file);
    }
  };
  const handleClose = () => {
    setOpen(false);
    if (!user?.profileImg) {
      setPreProfile(null);
    }
  };
  if (open) {
    return (
      <>
        <div className="bg-black w-screen h-full fixed top-0 left-0 z-50">
          <button
            onClick={handleClose}
            className="absolute left-5 top-2 bg-white rounded-full p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 384 512"
              className="fill-red-400 w-8 h-8"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </button>
          <div className="flex justify-center h-full items-center">
            {!user?.profileImg ? (
              <Image src={img} alt="non-profile" width={500} height={500} />
            ) : (
              <Image
                src={user?.profileImg}
                alt="profile"
                width={500}
                height={500}
              />
            )}
            <div>
              <UploadProfileImage
                photo={profile}
                setPhoto={setProfile}
                handleImage={handleImage}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  return;
};

const ProfileImage = ({ user }) => {
  const [open, setOpen] = useState(false);
  const img = "/profile.png";
  const [profile, setProfile] = useState(null);
  const [preProfile, setPreProfile] = useState(null);
  const handleOpenImg = () => {
    setOpen(true);
  };
  if (!user?.profileImg) {
    return (
      <>
        <Image
          src={img}
          alt="non-profile"
          width={80}
          height={80}
          style={{
            borderRadius: "100%",
            cursor: "pointer",
          }}
          onClick={handleOpenImg}
        />
        <OpenImg
          open={open}
          img={img}
          setOpen={setOpen}
          preProfile={preProfile}
          setPreProfile={setPreProfile}
          setProfile={setProfile}
          profile={profile}
        />
      </>
    );
  }
  return (
    <>
      <Image
        src={user?.profileImg}
        alt={`profile_${user?.username}`}
        width={0}
        height={0}
        sizes="50%"
        style={{
          cursor: "pointer",
          width: "80px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "100%",
        }}
        onClick={handleOpenImg}
      />
      <OpenImg
        open={open}
        img={img}
        setOpen={setOpen}
        profile={profile}
        setProfile={setProfile}
        user={user}
      />
    </>
  );
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
            <div className="bg-green-300 w-full h-28"></div>
            <div className="absolute top-20 left-5">
              <ProfileImage user={user} />
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
