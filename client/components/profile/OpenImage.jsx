import Image from "next/image";

const OpenImg = ({ openProfile, setOpenProfile, user }) => {
    const handleClose = () => {
      setOpenProfile(false);
    };
    if (openProfile) {
      return (
        <>
          <div className="bg-black w-screen h-full fixed top-0 left-0 z-50">
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
            <div className="flex justify-center h-full items-center">
              {user?.profileImg && (
                <Image
                  src={user?.profileImg}
                  alt="profile"
                  width={800}
                  height={800}
                />
              )}
            </div>
          </div>
        </>
      );
    }
    return;
  };

export default OpenImg