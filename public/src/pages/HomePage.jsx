import TopAnime from "../components/TopAnime";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Upcoming from "../components/Upcoming";
import Footer from "../components/Footer";
import { createContext,useContext,useEffect } from "react";
import { UsersProvider } from "../App";

const UsersInfo = createContext()

const HomePage = () => {
  const {users,setUsers} = useContext(UsersProvider)

  return (
    <div>
        <UsersInfo.Provider value = {{users:users,setUsers:setUsers}} >
          <Slider />
          <TopAnime />
          <Upcoming />
        </UsersInfo.Provider>
        
    </div>
  );
};

export default HomePage;
