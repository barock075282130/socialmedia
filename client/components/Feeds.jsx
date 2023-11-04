"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { userData } from "./context/userContext";
import Post from "./Post";

const deletePost = (posts, postId) => {
  return posts.filter((post)=> post._id !== postId)
}

const Feeds = () => {
  const serverUrl = 'http://localhost:4000'
  const [post, setPost] = useState([]);
  const [ updatePost, setUpdatePost ] = useState('')
  const searchParam = useSearchParams();
  const { user } = useContext(userData)
  const username = searchParam.get("name");
  const router = useRouter();
  const pathName = usePathname()
  const gotoProfile = (id) => router.push(`/profile?name=${id}`);
  const handleDel = async(id) => {
    if(confirm('delete this post!')){
      try {
        const res = await fetch(`${serverUrl}/post/del`,{
          method: "DELETE",
          headers: {
            "Content-Type":"application/json",
            "x-access-token": "Bearer " + localStorage.getItem("x-access-token")
          },
          body: JSON.stringify({
            user: user?.userId,
            postId: id
          })
        })
        if(res.ok){
          const postData = deletePost(post ,id)
          setPost(postData)
        }
      } catch (error) {
        throw error
      }
    }
  }
  useEffect(() => {
    const fetchPosts = async () => {
      const path = pathName === '/' ? '/post/getpost' : `/post/${username}`;

      try {
        const res = await fetch(`${serverUrl}${path}`, {
          method: 'GET',
        });
        const json = await res.json();
        setPost(json);
      } catch (error) {
        throw error;
      }
    };

    fetchPosts();
  }, [username]);
  const sortPost = [...post].reverse(post.time)
  return (
    <>
      {pathName === '/'&&(
        <Post
          post={post}
          setPost={setPost}
          updatePost={updatePost}
          setUpdatePost={setUpdatePost}
          type='Post'
        />
      )}
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
                {data?.profile ? (
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
                ):(
                  <div className="w-10 h-10 bg-white rounded-full border cursor-pointer" />
                )}
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
                {data?.img ? (
                  <Image
                    src={data.img}
                    alt={data.img}
                    width={100}
                    height={100}
                  />
                ) : null}
                {pathName === '/profile'&&
                  username === user?.username&&(
                    <div className="flex justify-center gap-3">
                      <button className="text-blue-400">edit</button>
                      <button className="text-red-400" onClick={()=>handleDel(data._id)}>del</button>
                    </div>
                  )
                }
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
