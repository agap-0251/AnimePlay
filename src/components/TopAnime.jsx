import { useEffect, useState } from "react";
import {  getData } from "../api/api";
import  AniGridContainer from "./AniGridContainer"
import "./homepage.css"
import { register } from 'swiper/element/bundle';

register();

const TopAnime = () => {
const [info, setInfo] = useState([]);
    
    useEffect(() => {
        async function getDetails() {
            const res = await getData();
            setInfo(res.data)
           
        }
        getDetails();
        return (
          setInfo([])
        )
       
    },[])

  return (
    <section className="top-anime-header d-flex flex-column justify-content-evenly" >
      <h1>Top Anime</h1>   
      <AniGridContainer data = {info} />
    </section>
  )
  
}

export default TopAnime