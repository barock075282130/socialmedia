import SearchBar from "@components/SearchBar"
import Feeds from "@components/Feeds"
import Profile from "@components/Profile"

const page = async({ params }) => {
  const serverUrl = "http://localhost:4000"
  const username = params.slug
  const res = await fetch(`${serverUrl}/post/${username}`, {
    method: "GET",
  });
  const data = await res.json()
  return (
    <div className="grid grid-cols-7">
      <section className="border col-span-2">
        <Profile username={username} />
      </section>
      <section className="col-span-3">
        <main>
          <Feeds data={data} />
        </main>
      </section>
      <section className="border col-span-2 min-h-screen p-3 gap-1">
        <SearchBar />
      </section>
    </div>
  )
}

export default page