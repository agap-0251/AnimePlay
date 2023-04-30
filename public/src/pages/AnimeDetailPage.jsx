import {useState, useEffect,createContext,useContext } from "react";
import { getDataById, getAnimeCharacters} from "../api/api";
import "../components/detailPageSty.css"
import "../components/homepage.css"
import DetailContainer from "../components/DetailContainer";
import Trailer from "../components/Trailer"
import {useParams, Link} from "react-router-dom"
import AnimeCharacters from "../components/AnimeCharacters";
import Footer from "../components/Footer";
import { UsersProvider } from "../App";

export const UsersInfo = createContext();

const AnimeDetailPage = () => {

    const {id} = useParams();
    const {users,setUsers} = useContext(UsersProvider)
    const [anime, setAnime] = useState({});
    const [animeChar, setAnimeChar] = useState()
    
    useEffect(() => {
        async function getDetails() {
            const res = await getDataById(id);
             setAnime(res.data);
        }
        getDetails();
        window.scrollTo(0,0);
        return (
          setAnime(null)
        )
       
    },[])

    useEffect(() => {
      async function getDetails() {
          const res = await getAnimeCharacters(id);
          setAnimeChar([...res.data])
      }
      getDetails();
     
  },[])

  return (
    <div className="text-white">
        <div className="container-fluid">
        {/* <nav className="navbar navbar-expand-md show-top-nav navbar-dark">
            <div className="container-fluid">
                <Link to = "/" style={{textDecoration: "none"}} >
                <div className="navbar-brand fw-bold web-name d-flex align-items-center">
                    <img className="web-icon" src = "https://i.pinimg.com/564x/b4/c4/84/b4c484a289f0b065b471f13275be917a.jpg" />
                  AnimePlay</div>
                </Link>
            </div>
        </nav> */}
        <UsersInfo.Provider value = {{users:users,setUsers:setUsers}} >
             <DetailContainer data = {anime} /> 
             <Trailer data = {anime} />
             <AnimeCharacters arr = {animeChar} />
        </UsersInfo.Provider>
            
        </div>
    </div>
  )
}

export default AnimeDetailPage