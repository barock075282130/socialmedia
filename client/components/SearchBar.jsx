"use client";

import { useState, useEffect } from "react";
import UserList from "./UserList";
import { useContext } from "react";
import { userData } from "./context/userContext";
import { useRouter } from "next/navigation";

const FindUser = ({ data, searchResult, user, gotoUser }) => {
  if (!data) {
    return;
  }
  return (
    <div className="absolute bg-white w-full">
      <UserList
        name={data}
        user={user}
        gotoUser={gotoUser}
        searchResult={searchResult}
      />
    </div>
  );
};

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { user } = useContext(userData);
  const [userList, setUserList] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchResult, setSearchResults] = useState([]);
  const serverUrl = "http://localhost:4000";
  const router = useRouter();
  const gotoUser = (username) => router.push(`/profile?name=${username}`);
  useEffect(() => {
    const username = user.userId ? `/acc/${user.username}` : "/acc";
    const fetchUser = async () => {
      try {
        const getUser = await fetch(`${serverUrl}${username}`, {
          method: "GET",
        });
        const json = await getUser.json();
        setUserList(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [user]);

  const filterUser = (search) => {
    const regex = new RegExp(search, "i");
    return userList.filter(
      (data) => regex.test(data.username) || regex.test(data.email)
    );
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchRes = filterUser(e.target.value);
        setSearchResults(searchRes);
      }, 500)
    );
  };
  return (
    <div className="relative grid">
      <input
          type="text"
          placeholder="search by username or email ..."
          className="py-2 px-5 w-full border rounded-full items-center"
          value={search}
          onChange={handleSearch}
        />
      <div className="relative">
        <FindUser
          data={search}
          setSearch={setSearch}
          user={user}
          gotoUser={gotoUser}
          searchResult={searchResult}
        />
      </div>
    </div>
  );
};

export default SearchBar;
