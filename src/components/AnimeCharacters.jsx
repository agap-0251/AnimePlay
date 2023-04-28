import "./detailPageSty.css"

const ImageContainer = ({char}) => {
    return (
        <div className="char-img-name-wrapper d-flex flex-column justify-content-center align-items-center">
          <img className="anime-char-img" src = {char.character.images?.jpg.image_url} />
          <div className="">
            <p className="char-name">{char.character.name}</p>
            <p><i>by {char?.voice_actors[0]?.person.name ? char?.voice_actors[0]?.person.name : "unknown"}</i></p>
          </div>
          
        </div>
    )
}

const AnimeCharacters = ({arr}) => {

  return (
    <div className="character-container">
        <h1>Anime Characters</h1>
        <div className="anime-characters container-fluid d-flex flex-wrap justify-content-evenly">
            {arr && arr.slice(0,12).map(charData => <ImageContainer key = {charData.character.mal_id} char={charData} />)}
        </div>
    </div>
    
  )
}

export default AnimeCharacters