import { useState } from "react"
import "./detailPageSty.css"

const Trailer = ({data}) => {
  const [studios,setStudios] = useState(false)
  const animeStudios = () => {
    setTimeout(()=> {
       setStudios(data?.studios[0].name)
        
    },1)
  }
  animeStudios()

    return (
      <div className='trailer container-fluid'>
        <h1 className="gradient-text">Trailer</h1>
        <div className="trailer-container">
        {(data?.trailer?.embed_url) ?<iframe className="frame" width="650" height="450" src={data?.trailer?.embed_url} allowFullScreen></iframe>: <h1>Trailer not available</h1>}
        <div className="studios">
          {<h1>Studios <span className="studios-name">{studios || "?"}</span></h1> }
        </div>
        </div>
        
      </div>
    )
}

export default Trailer