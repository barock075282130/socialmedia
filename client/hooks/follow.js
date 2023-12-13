const { useEffect, useState } = require("react");

function useFollow(id) {
  const [follow, setFollow] = useState([]);
  useEffect(() => {
    const getFollow = async () => {
      try {
        const res = await fetch(`http://localhost:4000/follow/follower/${id}`, {
          method: "GET",
          next: {
            revalidate: 0,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
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
