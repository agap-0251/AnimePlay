
const Trailer = ({data}) => {

    return (
      <div className='trailer container-fluid'>
        <h1 className="gradient-text">Trailer</h1>

        {(data?.trailer?.embed_url) ?<iframe className="frame" width="650" height="450" src={data?.trailer?.embed_url} allowFullScreen></iframe>: <h1>Trailer not available</h1>}
        
      </div>
    )
}

export default Trailer