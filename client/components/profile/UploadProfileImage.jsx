import Image from "next/image";

const UploadProfileImage = ({
  openUpload,
  setOpenUpload,
  profile,
  setProfile,
  previewImg,
  setPreviewImg,
  user,
  router,
  upload,
  setUpload
}) => {
  const handleCloseUpload = () => {
    setOpenUpload(false);
    setPreviewImg(null);
  };
  const handleUpload = () => {
    setOpenUpload(true);
  };
  const preview = (e) => {
    const image = e.target.files[0];
    const blob = new Blob([image]);
    const UrlObject = URL.createObjectURL(blob);
    setPreviewImg(UrlObject);
    setProfile(image);
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpload(true)
    const form = new FormData();
    form.append("profile", profile);
    try {
      const res = await fetch(
        `http://localhost:4000/profile/upload_profile/${user?.userId}`,
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
        const token = json.token
        localStorage.removeItem("x-access-token");
        localStorage.setItem("x-access-token", token);
        router.push(`/profile/${user?.username}`);
        setTimeout(() => window.location.reload(false), 300);
      }
    } catch (error) {
      throw error
    } finally {
      setUpload(false)
    }
  };
  return (
    <>
      {!openUpload && <p onClick={handleUpload} className="cursor-pointer hover:text-gray-600">Update profile photo</p>}
      {openUpload && (
        <>
          <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black/50 backdrop-blur-md" />
          <div className="fixed top-0 left-0 w-screen h-screen z-20">
            <button
              onClick={handleCloseUpload}
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
            <div className="flex items-center justify-center h-full">
              {previewImg && (
                <div>
                  <Image
                    src={previewImg}
                    alt="preview"
                    width={500}
                    height={500}
                  />
                </div>
              )}
              <form
                onSubmit={handleUpdateProfile}
                className="flex items-center justify-center"
                encType="multipart/form-data"
              >
                <input type="file" filename="profile" accept="image/png, image/jpeg" onChange={preview} className="px-4 m-5 bg-black/50 text-white py-2"/>
                <button className="bg-black text-white py-2.5 hover:bg-black/30 duration-200 px-4 rounded-lg">
                  {upload ? "Updating photo...":"Update"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UploadProfileImage;
