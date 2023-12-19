import Image from "next/image";

const UserList = ({ searchResult, user, gotoUser }) => {
  const img = '/profile.png'
  return (
    <>
      <div>
        {searchResult
          && searchResult.map((data, i) => (
              <div
                className="flex justify-between p-2 border my-1 rounded-lg hover:bg-gray-100 cursor-pointer duration-300"
                key={i}
                onClick={() => gotoUser(data.username)}
              >
                <div className="flex items-center">
                {data?.profileimg ? (
                  <Image
                      src={data?.profileimg}
                      alt={`profile_${data?.username}`}
                      width={0}
                      height={0}
                      sizes="50%"
                      style={{
                        cursor: "pointer",
                        width: "4rem",
                        height: "4rem",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  ):(
                    <Image
                      src={img}
                      alt={`profile_${data?.username}`}
                      width={0}
                      height={0}
                      sizes="50%"
                      style={{
                        cursor: "pointer",
                        width: "4rem",
                        height: "4rem",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  )}
                  <div className="flex flex-col px-3">
                    <span className="font-semibold">{data.username}</span>
                    <span className="text-sm text-gray-400">{data.email}</span>
                  </div>
                </div>
              </div>
            ))
          }
      </div>
    </>
  );
};

export default UserList;
