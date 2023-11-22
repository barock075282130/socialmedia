"use client";

import { userData } from "@components/context/userContext";
import Image from "next/image";
import { useContext, useState } from "react";
import UploadBackground from "./UploadBackground";

const ChkBackground = ({ user, open, setOpen }) => {
  const [imgOpen, setImgOpen] = useState(false);
  const [openBg, setOpenBg] = useState(false);
  const handleOpenBg = () => {
    setOpenBg(true);
  };
  const handleClose = () => {
    setOpenBg(false);
  };
  if (!user?.bgImg) {
    return (
      <ul>
        <li>
          <UploadBackground
            imgOpen={imgOpen}
            setImgOpen={setImgOpen}
            user={user}
          />
        </li>
      </ul>
    );
  }
  return (
    <>
      <ul className="grid gap-2 mx-2">
        <li>
          <UploadBackground
            imgOpen={imgOpen}
            setImgOpen={setImgOpen}
            user={user}
          />
        </li>
        <li onClick={handleOpenBg} className=" cursor-pointer hover:text-gray-400 duration-200">View background photo</li>
      </ul>
      {openBg && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 z-50 backdrop-blur-md">
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
          <div className="flex justify-center items-center h-full">
            <Image
              src={user?.bgImg}
              alt={`background_${user?.username}`}
              width={800}
              height={800}
            />
          </div>
        </div>
      )}
    </>
  );
};

const BackgroundImage = () => {
  const { user } = useContext(userData);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="absolute top-0 right-0 m-2 bg-black/50 rounded-full px-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          className="fill-white"
        >
          <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-5 right-0 m-2 bg-black/50 text-white p-2 rounded-md">
          <ChkBackground user={user} open={open} setOpen={setOpen} />
        </div>
      )}
      {!user?.bgImg ? (
        <Image
          src="/background.png"
          alt="no_background"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "7rem",
            objectFit: "cover",
          }}
        />
      ) : (
        <Image
          src={user?.bgImg}
          alt={`background_${user?.username}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "7rem",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
};

export default BackgroundImage;
