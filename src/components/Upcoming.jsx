import { useEffect, useState } from "react";
import { getUpcomingAnime } from "../api/api";
import  AniGridContainer from "./AniGridContainer"
import "./homepage.css"

const Upcoming = () => {

  const [upcmngAnime, setupcmngAnime] = useState([]);
    
    useEffect(() => {
        async function getDetails() {
            const res = await getUpcomingAnime();
            setupcmngAnime(res.data)
        }
        getDetails();
        return (
          setupcmngAnime([])
        )
       
    },[])

  return (
    <section className="upcoming-anime-header d-flex flex-column justify-content-start" >
      <h1>Upcoming Anime</h1>   
      <AniGridContainer data = {upcmngAnime} />
    </section>
  )
}

export default Upcoming