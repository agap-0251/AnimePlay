import "./srchCard.css"

const Card = ({data}) => {

  return (
    <div className="card card-wrapper p-0">
      <img src={data.images.jpg.large_image_url} className="card-img-top rounded" alt="..." />
      
      <div className="card-img-overlay text-white d-flex flex-column justify-content-end card-content">
        
        <h5 className="card-title srch-card-header">{data.title}</h5>
        
        <div className="d-flex justify-content-between ">
          <p className="card-text rank-score">Rank: {data.rank}</p>
          <p className="card-text rank-score">Score: {data.score}</p>
        </div>
     
      </div> 
    </div>
  )
}

export default Card