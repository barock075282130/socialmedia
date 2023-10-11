import SearchBar from "@components/SearchBar"
import UserList from "@components/UserList"
import Feeds from "@components/Feeds"
import Profile from "@components/Profile"

const page = () => {
  return (
    <div className="grid grid-cols-7">
      <section className="col-span-5">
        <Profile />
        <main>
          <Feeds />
        </main>
      </section>
      <section className="border col-span-2 min-h-screen p-3 gap-1">
        <SearchBar />
        <UserList />
      </section>
    </div>
  )
}

export default page