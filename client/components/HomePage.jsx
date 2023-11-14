import Feeds from "./Feeds";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

const HomePage = ({ data }) => {
  return (
    <div className="grid grid-cols-10">
      <section className="border col-span-2">
        <Sidebar />
      </section>
      <section className="col-span-5">
        <main>
          <Feeds data={data} />
        </main>
      </section>
      <section className="border col-span-3 min-h-screen p-3">
        <SearchBar />
      </section>
    </div>
  );
};

export default HomePage;
