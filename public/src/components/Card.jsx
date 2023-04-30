import { useEffect, useState } from "react"
import "./card.css"

const Card = ({data}) => {

  return (
    <div className="card-wrapper1 p-0" >
      <img src={data.images.jpg.large_image_url} className="wrapper-img card-img-top rounded" alt="..." />
      
      <div className="card-img-overlay text-white d-flex flex-column justify-content-end align-content-center card-content1">
        
        <h5 className="card-title fs-6">{data.title}</h5>
        
        <div className="d-flex justify-content-between">
          <p className="card-text fs-6">Rank: {data.rank}</p>
          <p className="card-text fs-6">Score: {data.score}</p>
        </div>
     
      </div> 
    </div>
  )
}

export default Card