import TopAnime from "../components/TopAnime";
import Slider from "../components/Slider";
import Upcoming from "../components/Upcoming";
import { createContext,useContext } from "react";
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
