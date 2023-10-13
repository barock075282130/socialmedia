"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { userData } from "./context/userContext";

const Feeds = () => {
  const [post, setPost] = useState([]);
  const searchParam = useSearchParams();
  const userId = searchParam.get("id");
  const router = useRouter();
  const pathName = usePathname()
  const gotoProfile = (id) => router.push(`/profile?id=${id}`);
  useEffect(() => {
    const fetchPost = async () => {
      if(pathName === `/profile`){
        try {
          const res = await fetch(`http://localhost:4000/post/${userId}`, {
            method: "GET",
          });
          const json = await res.json();
          setPost(json);
        } catch (error) {
          console.log(error);
        }
      }
      if(pathName === '/'){
        try {
          const res = await fetch("http://localhost:4000/post/getpost", {
            method: "GET",
          });
          const json = await res.json();
          setPost(json);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchPost();
  }, [userId]);
  return (
    <>
      {post
        ? post.map((data, i) => (
            <div
              className="m-1 border grid grid-cols-11 py-2 rounded-md"
              key={i}
            >
              <div
                className="col-span-1 flex justify-center"
                onClick={() => gotoProfile(data.userpostid)}
              >
                <div className="w-10 h-10 bg-white rounded-full border cursor-pointer" />
              </div>
              <div className="col-span-10">
                <div
                  className="flex gap-1 cursor-pointer"
                  onClick={() => gotoProfile(data.userpostid)}
                >
                  <p className="font-semibold">{data.username}</p>
                  <p className="font-normal text-gray-400">{data.address}</p>
                </div>
                <p>{data?.posttext}</p>
                {data?.img ? (
                  <Image
                    src={data.img}
                    alt={data.img}
                    width={100}
                    height={100}
                  />
                ) : null}
              </div>
            </div>
          ))
        : null}
      {post.length === 0 && (
        <div className="flex justify-center mt-5">
          <p className="font-bold text-gray-400 text-4xl">No Post Yet</p>
        </div>
      )}
    </>
  );
};

export default Feeds;
