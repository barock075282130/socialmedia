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
        window.location.reload(false)
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
          <div className="flex justify-end items-center">
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
