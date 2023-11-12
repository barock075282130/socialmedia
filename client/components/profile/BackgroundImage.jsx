"use client";

import { userData } from "@components/context/userContext";
import Image from "next/image";
import { useContext, useState } from "react";
import UploadBackground from "./UploadBackground";

const ChkBackground = ({ user, open, setOpen }) => {
  const [imgOpen, setImgOpen] = useState(false);
  if (!user?.bgImg) {
    return (
      <ul>
        <li>
          <UploadBackground imgOpen={imgOpen} setImgOpen={setImgOpen} />
        </li>
      </ul>
    );
  }
  return (
    <ul>
      <li onClick={() => setOpen(!open)}>Update background photo</li>
      <li onClick={() => setOpen(!open)}>View background photo</li>
    </ul>
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
    </div>
  );
};

export default BackgroundImage;
