import { Link } from "react-router-dom";
import "../components/srchPage.css";
import { useEffect, useState,useContext } from "react";
import { getWatchList } from "../api/userInfo";
import SrchCard from "../components/SrchCard";
import { UsersProvider } from "../App";
import "../components/srchCard.css"

const WatchListContainer = ({ arr }) => {
  if (arr?.length === 0)
    return (
      <h1 style={{ color: "white" }}>
        You don't have any anime in your WatchList
      </h1>
    );

  return (
    <div className="container watchList-container ">
      {arr &&
        arr.map(
          (anime) =>
            anime && (
              <Link
              className="link-style"
                key={anime.mal_id}
                to={`/animeDetail/${anime.mal_id}`}
              >
                <SrchCard data = {anime} />
              </Link>
            )
        )}
    </div>
  );

};

const WatchListPage = () => {
  const [watchArr, setWatchArr] = useState([]);
  const {users,setUsers} = useContext(UsersProvider)
  
  if(users === '')
    return <h1>SignIn to use Watch List feature</h1>
  useEffect(() => {
    const list = getWatchList(users);
    setWatchArr(list)
  }, []);

  return (
    <div className="container WatchList-wrapper  text-white d-flex flex-column ">
      
      <h1 style={{ color: "rgb(68, 183, 83)" }}> WatchListPage</h1>
      <WatchListContainer arr = {watchArr} />
    </div>
  );
};

export default WatchListPage;
