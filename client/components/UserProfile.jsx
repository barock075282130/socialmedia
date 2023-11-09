"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const OpenImg = ({ img, open, setOpen }) => {
  if (open) {
    return (
      <>
        <div className="bg-black w-screen h-full fixed top-0 left-0 z-50">
          <button
            onClick={() => setOpen(false)}
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
          <div className="flex justify-center">
            <Image
              src={img}
              alt="non-profile"
              width={0}
              height={0}
              sizes="100vh"
              style={{
                width: "auto",
                height: "100vh",
              }}
            />
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
  const handleOpenImg = () => {
    setOpen(true);
  };
  if (!user?.data?.profileimg) {
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
        <OpenImg open={open} img={img} setOpen={setOpen} />
      </>
    );
  }
  return (
    <>
      <Image
        src={user?.data?.profileimg}
        alt={`profile_${user?.data?.username}`}
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
      <OpenImg open={open} img={user?.data?.profileimg} setOpen={setOpen} />
    </>
  );
};

const UserProfile = ({ name }) => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const serverUrl = "http://localhost:4000";
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${serverUrl}/acc/user/${name}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setUserInfo(json);
      } catch (error) {
        throw error;
      }
    };
    fetchUser();
  }, [name]);
  return (
    <>
      {userInfo && (
        <div>
          <div className="relative">
            <button
              className="bg-gray-300/40 hover:bg-gray-300 duration-300 rounded-full w-8 h-8 m-2 absolute"
              onClick={() => router.push("/")}
            >
              {"<-"}
            </button>
            <div className="bg-green-300 w-full h-28"></div>
            <div className="absolute top-20 left-5">
              <ProfileImage user={userInfo} />
            </div>
          </div>
          <div className="h-20 pl-28">
            <span className="flex pt-2 font-semibold text-xl">
              {userInfo?.data?.username}
            </span>
            <span className="text-gray-400">
              @{userInfo?.data?.email.split("@")[1]}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
