"use client";

import { useContext, useEffect, useState } from "react";
import { userData } from "../context/userContext";
import { useRouter } from "next/navigation";

const EditProfile = ({ open, setOpen }) => {
  const { user } = useContext(userData);
  const router = useRouter();
  const [userDetail, setUserDetail] = useState(null);
  const [msg, setMsg] = useState(null);
  const changeUser = async (e) => {
    e.preventDefault();
    try {
      const edit = await fetch(
        `http://localhost:4000/profile/edit/${user?.userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-access-token":
              "Bearer " + localStorage.getItem("x-access-token"),
          },
          body: JSON.stringify({
            username: userDetail
          }),
        }
      );
      if (!edit.ok) {
        const json = await edit.json();
        setMsg(json);
      } else {
        const json = await edit.json();
        const token = json.token;
        localStorage.removeItem("x-access-token");
        localStorage.setItem("x-access-token", token);
        setMsg(json.msg);
        router.push(`/profile?name=${json.username}`);
        setTimeout(() => window.location.reload(false), 300);
      }
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    if (user?.userId) {
      const fetchUserData = async () => {
        try {
          const res = await fetch(`http://localhost:4000/profile`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token":
                "Bearer " + localStorage.getItem("x-access-token"),
            },
          });
          if (res.ok) {
            const json = await res.json();
            setUserDetail(json);
          }
        } catch (error) {
          throw error;
        }
      };
      fetchUserData();
    }
  }, [user]);
  return (
    <>
      {!open && (
        <button
          className="blue_btn absolute right-0 m-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Edit Profile
        </button>
      )}

      <div>
        {open && (
          <div className="fixed backdrop-blur-md flex justify-center items-center top-0 left-0 w-screen h-screen bg-black/60">
            <div className="bg-white px-10 py-4 rounded-lg top-1/3">
              <form onSubmit={changeUser} encType="multipart/form-data">
                <div>
                  <div className="grid">
                    <span className="pl-3 font-semibold">Username</span>
                    <input
                      type="text"
                      name="username"
                      value={userDetail}
                      onChange={(e)=>setUserDetail(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <button className="blue_btn">Edit</button>
                    <button className="gray_btn" onClick={()=>setOpen(false)}>
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
              {msg && (
                <div className="bg-red-500 text-white font-semibold mt-2 px-2 py-1 text-center rounded-lg text-lg">
                  {msg}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EditProfile;
