"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { userData } from "./context/userContext";
import Post from "./Post";

const deletePost = (posts, postId) => {
  return posts.filter((post) => post._id !== postId);
};

const ShowPost = ({ path, post, setPost, updatePost, setUpdatePost }) => {
  if (path !== "/") {
    return;
  }
  return (
    <Post
      post={post}
      setPost={setPost}
      updatePost={updatePost}
      setUpdatePost={setUpdatePost}
      type="Post"
    />
  );
};

const ShowImage = ({ data }) => {
  if (!data) {
    return (
      <div className="w-10 h-10 bg-white rounded-full border cursor-pointer" />
    );
  }
  return (
    <Image
      src={data?.profile}
      alt={`profile_${data?.username}`}
      width={0}
      height={0}
      sizes="50%"
      style={{
        cursor: "pointer",
        width: "2.5rem",
        height: "2.5rem",
        objectFit: "cover",
        borderRadius: "100%",
      }}
    />
  );
};

const PostImage = ({ data }) => {
  if (!data) {
    return;
  }
  return <Image src={data.img} alt={data.img} width={100} height={100} />;
};

const ShowFeed = ({
  sortPost,
  gotoProfile,
  handleDel,
  pathName,
  user,
}) => {
  if (sortPost.length === 0 || sortPost.length < 0) {
    return (
      <>
        <div className="flex justify-center mt-5">
          <p className="font-bold text-gray-400 text-4xl">No Post Yet</p>
        </div>
      </>
    );
  }
  return (
    <>
      {sortPost
        ? sortPost.map((data, i) => (
            <div
              className="m-1 border grid grid-cols-11 py-2 rounded-md"
              key={i}
            >
              <div
                className="col-span-1 flex justify-center"
                onClick={() => gotoProfile(data.username)}
              >
                <ShowImage data={data} />
              </div>
              <div className="col-span-10 px-2">
                <div
                  className="flex gap-1 cursor-pointer"
                  onClick={() => gotoProfile(data.username)}
                >
                  <p className="font-semibold">{data.username}</p>
                  <p className="font-normal text-gray-400">{data.address}</p>
                </div>
                <p>{data?.posttext}</p>
                <PostImage data={data?.img} />
                {pathName === "/profile" && username === user?.username && (
                  <div className="flex justify-center gap-3">
                    <button className="text-blue-400">edit</button>
                    <button
                      className="text-red-400"
                      onClick={() => handleDel(data._id)}
                    >
                      del
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        : null}
    </>
  );
};

const Feeds = ({ data }) => {
  const serverUrl = "http://localhost:4000";
  const [updatePost, setUpdatePost] = useState("");
  const [ post, setPost ] = useState([])
  const { user } = useContext(userData);
  const router = useRouter();
  const pathName = usePathname();
  const gotoProfile = (id) => router.push(`/profile/${id}`);
  const handleDel = async (id) => {
    if (confirm("delete this post!")) {
      try {
        const res = await fetch(`${serverUrl}/post/del`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "x-access-token":
              "Bearer " + localStorage.getItem("x-access-token"),
          },
          body: JSON.stringify({
            user: user?.userId,
            postId: id,
          }),
        });
        if (res.ok) {
          const postData = deletePost(post, id);
          setPost(postData);
        }
      } catch (error) {
        throw error;
      }
    }
  };
  const sortPost = [...data].reverse(data.time);
  return (
    <>
      <ShowPost
        path={pathName}
        updatePost={updatePost}
        setUpdatePost={setUpdatePost}
      />
      <ShowFeed
        sortPost={sortPost}
        gotoProfile={gotoProfile}
        handleDel={handleDel}
        pathName={pathName}
        user={user}
      />
    </>
  );
};

export default Feeds;
