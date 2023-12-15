import Follow from "@components/Follow";
import Sidebar from "@components/Sidebar";

const getFollow = async (id) => {
  try {
    const res = await fetch(`http://localhost:4000/follow/follower/${id}`, {
      method: "GET",
      next: {
        revalidate: 0
      },
      cache: 'no-store'
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

const page = async ({ params }) => {
  const id = params.slug;
  const data = await getFollow(id);
  return (
    <div className="grid grid-cols-10 h-screen">
      <section className="border col-span-2">
        <Sidebar />
      </section>
      <section className="col-span-8">
        <main>
          <Follow data={data} />
        </main>
      </section>
    </div>
  );
};

export default page;
