"use client";

import { useContext, useState } from "react";
import { userData } from "./context/userContext";
import Image from "next/image";

const PreviewPostImg = ({ setOpenPre, img }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-md z-50 flex justify-center items-center">
      <button
        onClick={() => setOpenPre(false)}
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
      {img.map((pic, i) => (
        <div key={i}>
          <Image src={pic} alt={`preview_${pic}`} width={500} height={500} />
        </div>
      ))}
    </div>
  );
};

const Post = ({ post, setPost, updatePost, setUpdatePost, type }) => {
  const serverUrl = "http://localhost:4000";
  const { user } = useContext(userData);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState([]);
  const [openPre, setOpenPre] = useState(false);
  const handlePreview = (e) => {
    e.preventDefault();
    const img = [...e.target.files];
    let allImage = [];
    for (let i = 0; i < img.length; i++) {
      const blob = new Blob([img[i]]);
      const url = URL.createObjectURL(blob);
      allImage.push(url);
    }
    setPreview(allImage);
  };
  const handlePost = async () => {
    if (!updatePost || updatePost === "") {
      alert("Post Empty!!");
    } else {
      setLoading(true);
      try {
        const res = await fetch(`${serverUrl}/post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user?.userId,
            post: updatePost,
          }),
        });
        if (res.ok) {
          setUpdatePost("");
          const data = await res.json();
          const newLine = data.posttext
            .split("\n")
            .map((str, i) => <p key={i}>{str}</p>);
          const newData = { ...data, posttext: newLine };
          setPost([...post, newData]);
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <>
      {openPre && <PreviewPostImg setOpenPre={setOpenPre} img={preview} />}
      {user?.userId && (
        <div className="mb-3 p-1">
          <div className="relative">
            <div className="absolute right-0 bottom-2 p-1 flex items-center">
              {preview.length > 0 && (
                <div className="relative w-[100px] h-[100px] flex justify-center items-center">
                  <div
                    className="w-full h-full bg-black/50 hover:bg-black/80 duration-300 cursor-pointer rounded-md absolute"
                    onClick={() => setOpenPre(true)}
                  />
                  <p className="absolute flex justify-center font-bold text-4xl text-white">
                    {preview.length}
                  </p>
                  <Image
                    src={preview[0]}
                    alt={`preview_${preview[0]}`}
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
            <textarea
              name="postText"
              cols="30"
              rows="5"
              className="resize-none w-full p-3 border rounded-md"
              value={updatePost}
              onChange={(e) => setUpdatePost(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 px-2">
              <label className=" cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="w-5 h-5"
                >
                  <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                </svg>
                <input
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg"
                  onChange={handlePreview}
                  multiple
                />
              </label>
            </div>
            <div className="flex gap-2">
              <button className="blue_btn cursor-pointer" onClick={handlePost}>
                {loading ? `${type}...` : type}
              </button>
              {type === "Edit" && (
                <button
                  className="gray_btn cursor-pointer"
                  onClick={() => setOpenEdit(false)}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
