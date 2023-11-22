"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UploadBackground = ({ imgOpen, setImgOpen, user }) => {
  const [preview, setPreview] = useState(null);
  const [ background, setBackground ] = useState(null);
  const [ upload , setUpload ]= useState(false)
  const router = useRouter()
  const preImage = (e) => {
    const file = e.target.files[0];
    const blob = new Blob([file]);
    const url = URL.createObjectURL(blob);
    setPreview(url);
    setBackground(file)
  };
  const handleCloseUpload = () => {
    setImgOpen(false);
    setPreview(null);
  };
  const handleUpdateBg = async (e) => {
    e.preventDefault();
    setUpload(true);
    const form = new FormData();
    form.append("background", background);
    try {
      const res = await fetch(
        `http://localhost:4000/profile/upload_background/${user?.userId}`,
        {
          method: "PATCH",
          headers: {
            "x-access-token":
              "Bearer " + localStorage.getItem("x-access-token"),
          },
          body: form,
        }
      );
      if (res.ok) {
        const json = await res.json();
        const token = json.token;
        localStorage.removeItem("x-access-token");
        localStorage.setItem("x-access-token", token);
        router.push(`/profile/${user?.username}`);
        setTimeout(() => window.location.reload(false), 300);
      }
    } catch (error) {
      throw error;
    } finally {
      setUpload(false);
    }
  };
  return (
    <>
      {!imgOpen && (
        <p className="cursor-pointer hover:text-gray-400 duration-200" onClick={() => setImgOpen(true)}>
          Update background photo
        </p>
      )}
      {imgOpen && (
        <>
          <button
            onClick={handleCloseUpload}
            className="fixed left-5 top-2 bg-white rounded-full p-1 z-30"
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
          <div className="bg-black/50 backdrop-blur-md fixed top-0 left-0 w-screen h-screen z-20 flex justify-center items-center">
            <div className="grid">
              <div>
                {preview && (
                  <Image
                    src={preview}
                    alt="img_preview"
                    width={500}
                    height={500}
                  />
                )}
              </div>
              <form onSubmit={handleUpdateBg}>
                <input type="file" filename="background" onChange={preImage} />
                <button>{upload ? 'Uploading...': 'Upload'}</button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UploadBackground;
