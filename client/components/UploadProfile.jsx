"use client";

import { useContext, useState } from "react";
import { userData } from "./context/userContext";

const UploadProfileImage = ({ photo, handleImage }) => {
  const serverUrl = "http://localhost:4000";
  const { user } = useContext(userData);
  const [open, setOpen] = useState(false);
  const upload = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("profile", photo);
    try {
      const img = await fetch(`${serverUrl}/profile/upload/${user?.userId}`, {
        method: "POST",
        headers: {
          "x-access-token": "Bearer " + localStorage.getItem("x-access-token"),
        },
        body: formdata,
      });
      if(img.ok){
        const jsonData = await img.json()
        const token = jsonData.token
        localStorage.removeItem("x-access-token")
        localStorage.setItem("x-access-token",token)
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <div>
        <button onClick={() => setOpen(true)} className=" blue_btn">
          Edit Photo
        </button>
      </div>
      {open && (
        <div className="absolute flex justify-center z-50 p-6 bg-white">
          <form onSubmit={upload} encType="multipart/form-data">
            <span>Profile</span>
            <input
              type="file"
              accept="image/*"
              filename="profile"
              onChange={handleImage}
            />
            <div className="flex justify-between">
              <button className="blue_btn">Upload</button>
              <span
                onClick={() => setOpen(false)}
                className="gray_btn cursor-pointer"
              >
                Cancle
              </span>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UploadProfileImage;
