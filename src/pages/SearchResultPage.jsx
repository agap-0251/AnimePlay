import { Link, useLocation} from "react-router-dom"
import { useCallback, useEffect, useState } from "react";
import { getAnimeBySearch } from "../api/api";
import SrchCard from "../components/SrchCard";
import "../components/srchPage.css"
import "../components/homepage.css"
import Footer from "../components/Footer";
import { debounce } from "lodash";


const SrchListContainer = ({arr}) => {
    // console.log(arr)
    if(arr?.length === 0)
        return <h1 style={{color: "white"}}>Sorry no results are found ...</h1>
    return (
        <div className="container srchList-container">
            {arr && arr.map(anime => {if(anime.rank) return <Link style={{maxHeight: "19rem",marginBottom: "3px"}} key = {anime.mal_id} to={`/animeDetail/${anime.mal_id}`} ><SrchCard data = {anime} /></Link>})}
        </div>
    )
}

const SearchResultPage = () => {
    const [srchList, setSrchList] = useState()
    const [srchValue, setSrchValue] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    // useEffect(()=> {
    //     async function getDetails() {
    //         if(location.state.data) {
    //             const res = await getAnimeBySearch(location.state.data);
    //             setSrchList([...res.data])
    //         }
            
    //     }

    //     getDetails();
    // },[])

     async function getDetails(val){
      setIsLoading(true)
            if(val) {
                const res = await getAnimeBySearch(val);
                setSrchList([...res.data])
                setIsLoading(false)
            }
    }

    const debouncedFunc = useCallback(debounce(val => getDetails(val),350),[])
  
    function handleChange(e) {
      // console.log(e.target.value)
        setSrchValue(e.target.value);
         debouncedFunc(e.target.value)     
    }

  return (
    <div className="container srchList-wrapper text-white d-flex flex-column">
        <h1 style={{color: "rgb(68, 183, 83)"}}>Search Results for ....</h1>
                 
         <form
         className="d-flex search-form"
         role="search"
       >
         <input
           className="form-control me-2"
           type="search"
           onChange={handleChange}
           placeholder="Search"
           aria-label="Search"
           value={srchValue}
         />    
       </form>  
       {srchValue && <SrchListContainer arr = {srchList} />}
    </div>
  )
}

export default SearchResultPage