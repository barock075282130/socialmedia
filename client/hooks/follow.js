const { useEffect, useState } = require("react");

function useFollow(id) {
  const [follow, setFollow] = useState(undefined);
  useEffect(() => {
    const getFollow = async () => {
      try {
        const res = await fetch(`http://localhost:4000/follow/follower/${id}`, {
          method: "GET",
          next: {
            revalidate: 0,
          },
        });
        const data = await res.json();
        setFollow(data);
      } catch (error) {
        throw error;
      }
    };
    getFollow();
  }, [id]);
  return { follow };
}

export default useFollow;
