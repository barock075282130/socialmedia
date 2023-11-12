"use client";

import Image from "next/image";
import { useState } from "react";

const UploadBackground = ({ imgOpen, setImgOpen }) => {
  const [preview, setPreview] = useState(null);
  const preImage = (e) => {
    const file = e.target.files[0];
    const blob = new Blob([file]);
    const url = URL.createObjectURL(blob);
    setPreview(url);
  };
  const handleCloseUpload = () => {
    setImgOpen(false)
    setPreview(null)
  }
  return (
    <>
      {!imgOpen && (
        <p className="cursor-pointer" onClick={() => setImgOpen(true)}>
          Update background photo
        </p>
      )}
      {imgOpen && (
        <>
          <button
            onClick={handleCloseUpload}
            className="fixed z-30 left-5 top-5"
          >
            Close
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
              <form>
                <input type="file" filename="background" onChange={preImage} />
                <button>Upload</button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UploadBackground;
