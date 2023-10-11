import Feeds from "./Feeds"
import Post from "./Post"
import Profile from "./Profile"
import SearchBar from "./SearchBar"
import Trends from "./Trends"
import UserList from "./UserList"

const HomePage = () => {
  return (
    <div className="grid grid-cols-7">
      <section className="border col-span-2">
        <Profile />
      </section>
      <section className="col-span-3">
        <Post />
        <main>
          <Feeds />
        </main>
      </section>
      <section className="border col-span-2 min-h-screen p-3 gap-1">
        <SearchBar />
        <Trends />
        <UserList />
      </section>
    </div>
  )
}

export default HomePage