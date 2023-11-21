const EditPost = ({
  setLoading,
  loading,
  setPostEdit,
  postEdit,
  setOpenEdit,
  user,
}) => {
  const handleEditUpdate = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:4000/post/editpost/${user?.username}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-access-token": "Bearer "+ localStorage.getItem('x-access-token')
          },
          body: JSON.stringify({
            user: user?.userId,
            postId: postEdit._id,
            text: postEdit.posttext,
          }),
        }
      );
      if (res.ok) {
        const data = await res.json()
        setOpenEdit(false);
        setPostEdit(data.text)
      }
    } catch (error) {
      throw error
    }
  };
  return (
    <div className="fixed bg-black/50 flex justify-center items-center backdrop-blur-md top-0 left-0 w-screen h-screen">
      <div className="bg-white rounded-md w-96">
        <div className="mb-3 p-1">
          <textarea
            name="postText"
            cols="30"
            rows="5"
            className="resize-none w-full p-3 border rounded-md"
            value={postEdit.posttext}
            onChange={(e) =>
              setPostEdit({ ...postEdit, posttext: e.target.value })
            }
          ></textarea>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                className="w-5 h-5 cursor-pointer"
              >
                <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
              </svg>
            </div>
            <div className="flex gap-2">
              <button
                className="blue_btn cursor-pointer"
                onClick={handleEditUpdate}
              >
                {loading ? `Edit...` : "Edit"}
              </button>
              <button
                className="gray_btn cursor-pointer"
                onClick={() => setOpenEdit(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
