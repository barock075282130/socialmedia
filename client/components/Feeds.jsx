"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { userData } from "./context/userContext";
import Post from "./Post";
import EditPost from "./profile/EditPost";

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
  const img = "/profile.png";
  if (!data.profile) {
    return (
      <div className="w-10 h-10 bg-white rounded-full border cursor-pointer">
        <Image
          src={img}
          alt="non-profile"
          width={100}
          height={100}
          style={{
            borderRadius: "100%",
          }}
        />
      </div>
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
  if (data?.length > 0) {
    return (
      <div className="grid grid-cols-2 place-items-center gap-3">
        {data.map((img, i) => (
          <div key={i}>
            <Image
              src={img.link}
              alt={`photo_${img.alt}`}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    );
  }
};

const ShowFeed = ({
  sort,
  gotoProfile,
  handleDel,
  pathName,
  user,
  openEdit,
  setOpenEdit,
  postEdit,
  setPostEdit,
}) => {
  const [loading, setLoading] = useState(false);
  const handleEdit = (data) => {
    setOpenEdit(true);
    const arr = data.posttext
      .map((s) => s.props.children)
      .join()
      .replace(/,/g, "");
    setPostEdit({
      ...data,
      posttext: arr,
    });
  };

  if (sort.length === 0 || sort.length < 0) {
    return (
      <>
        <div className="flex justify-center mt-5">
          <p className="font-bold text-gray-400 text-4xl">No Post Yet</p>
        </div>
      </>
    );
  }
  if (openEdit) {
    return (
      <>
        <EditPost
          setLoading={setLoading}
          loading={loading}
          setPostEdit={setPostEdit}
          postEdit={postEdit}
          setOpenEdit={setOpenEdit}
          user={user}
          sort={sort}
        />
      </>
    );
  }
  return (
    <>
      {sort
        ? sort.map((data, i) => (
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
                <div>{data?.posttext}</div>
                <PostImage data={data?.postimg} />
                {pathName === `/profile/${user?.username}` && (
                  <div className="flex justify-center gap-3">
                    <button
                      className="text-blue-400"
                      onClick={() => handleEdit(data)}
                    >
                      edit
                    </button>
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

const Feeds = ({ name }) => {
  const serverUrl = "http://localhost:4000";
  const [updatePost, setUpdatePost] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [post, setPost] = useState([]);
  const [postEdit, setPostEdit] = useState([]);
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
  useEffect(() => {
    const path =
      pathName === `/`
        ? `${serverUrl}/post/getpost`
        : `${serverUrl}/post/${name.slug}`;

    const fetchPost = async () => {
      try {
        const res = await fetch(path, {
          method: "GET",
        });
        if (res.ok) {
          const data = await res.json();
          const newLines = data.map((all) => {
            all.posttext = all.posttext
              .split("\n")
              .map((str, i) => <p key={i}>{str}</p>);
            return all;
          });
          setPost(newLines);
        }
      } catch (error) {
        throw error;
      }
    };
    fetchPost();
  }, []);
  const sort = [...post].reverse(post.time);
  return (
    <>
      <ShowPost
        post={post}
        setPost={setPost}
        path={pathName}
        updatePost={updatePost}
        setUpdatePost={setUpdatePost}
      />
      <ShowFeed
        sort={sort}
        gotoProfile={gotoProfile}
        handleDel={handleDel}
        pathName={pathName}
        user={user}
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        postEdit={postEdit}
        setPostEdit={setPostEdit}
      />
    </>
  );
};

export default Feeds;
