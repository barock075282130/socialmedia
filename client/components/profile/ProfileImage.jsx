"use client";

import { useState } from "react";
import OpenImg from "./OpenImage";
import Image from "next/image";
import UploadProfileImage from "./UploadProfileImage";

const ProfileImage = ({ user, router }) => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const [openUpload, setOpenUpload] = useState(null);
  const [profile, setProfile] = useState(null);
  const [upload, setUpload] = useState(false);
  const img = "/profile.png";
  const handleOpenImg = () => {
    setOpen(!open);
  };
  const handleOpenImgClick = () => {
    setOpenProfile(true);
    setOpen(false);
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
        {open && (
          <ul className="mt-2 bg-white shadow-md p-4 grid gap-2 rounded-lg">
            <li>
              <UploadProfileImage
                openUpload={openUpload}
                setOpenUpload={setOpenUpload}
                profile={profile}
                setProfile={setProfile}
                previewImg={previewImg}
                setPreviewImg={setPreviewImg}
                user={user}
                router={router}
                upload={upload}
                setUpload={setUpload}
              />
            </li>
          </ul>
        )}
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
      {open && (
        <ul className="mt-2 bg-white shadow-md p-4 grid gap-2 rounded-lg">
          <li>
            <UploadProfileImage
              openUpload={openUpload}
              setOpenUpload={setOpenUpload}
              profile={profile}
              setProfile={setProfile}
              previewImg={previewImg}
              setPreviewImg={setPreviewImg}
              user={user}
              router={router}
              upload={upload}
              setUpload={setUpload}
            />
          </li>
          <li
            className="hover:text-gray-600 cursor-pointer"
            onClick={handleOpenImgClick}
          >
            Open profile photo
          </li>
        </ul>
      )}
      <OpenImg
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        user={user}
      />
    </>
  );
};

export default ProfileImage;
