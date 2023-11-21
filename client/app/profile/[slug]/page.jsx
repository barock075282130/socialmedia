import SearchBar from "@components/SearchBar"
import Feeds from "@components/Feeds"
import Profile from "@components/Profile"

const page = async({ params }) => {
  const username = params.slug
  return (
    <div className="grid grid-cols-7">
      <section className="border col-span-2">
        <Profile username={username} />
      </section>
      <section className="col-span-3">
        <main>
          <Feeds name={params} />
        </main>
      </section>
      <section className="border col-span-2 min-h-screen p-3 gap-1">
        <SearchBar />
      </section>
    </div>
  )
}

export default page