'use client';

import { useContext, useState } from "react";
import { userData } from "./context/userContext";

const Post = ({ 
  post,
  setPost,
  updatePost,
  setUpdatePost,
 }) => {
  const { user } = useContext(userData)
  const [ loading, setLoading ] = useState(false);
  const handlePost = async() => {
    setLoading(true)
    try {
      const res = await fetch('http://localhost:4000/post',{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          userId: user?.userId,
          post: updatePost
        })
      })
      if(res.ok){
        setUpdatePost("")
        const data = await res.json();
        setPost([ ...post, {
          img: data.img || "",
          address: data.address,
          posttext: data.posttext,
          username: data.username,
          userpostid: data.userpostid,
        }])
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <>
      {user?.userId && (
        <div className='mb-3 p-1'>
          <textarea 
              name="postText" 
              cols="30" 
              rows="5" 
              className="resize-none w-full p-3 border rounded-md"
              value={updatePost}
              onChange={(e)=>setUpdatePost(e.target.value)}
            >
            </textarea>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-5 h-5 cursor-pointer">
                  <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-5 h-5 cursor-pointer">
                  <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
              </div>
              <button className="blue_btn cursor-pointer" onClick={handlePost}>
                {loading ? 'Posting...' : 'Post'}
              </button>
            </div>
      </div>
      )}
    </>
  )
}

export default Post