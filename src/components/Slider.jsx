import { useRef, useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { getAnimeAiringNow} from '../api/api';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./homepage.css"

const Slide = ({data}) => {
  const [wordLimit, setWordLimit] = useState(false)
  const [left, setLeft] = useState(true)
  useEffect(()=> {
    window.addEventListener('resize', () => {
      let winWidth = window.innerWidth;
      if(winWidth<=642)
       setWordLimit(true)
      else 
        setWordLimit(false)
      if(winWidth <= 420)
        setLeft(false)
      else
        setLeft(true)
    })
  },[])


    //const temp = data.duration.slice(0,data.duration.indexOf("min")+3);
    return (
        <div className='slide d-flex text-white align-items-center'>
            <div className="slide-left">
                <img src={data.images.webp.large_image_url} />
                {left && 
                <div className="d-flex justify-content-evenly align-items-center">
                {data.type && <p className='d-flex align-items-center fw-bold'> <FaRegPlayCircle style={{marginRight: "3px"}} /> {data.type}</p>}
                {data.rank &&  <p className='d-flex align-items-center spotlight fw-bold' >#{data.rank} spotlight</p> } 
            </div> 
                }
                
                 
            </div>
            <div className='airing-anime-synopsis fs-5 fw-bold d-flex '>
            <h3 className='slider-header'>{data.title_english || data.title}</h3>
                <h5 className='text-white'>Synopsis</h5>
                <span className='text-white fw-normal small-text small-syn-text'>{wordLimit?`${data?.synopsis.slice(0,100)}`:`${data?.synopsis.slice(0,500)}`}...</span>
                {!left && 
                <div className="d-flex justify-content-evenly align-items-center slide-right">
                {data.type && <p className='d-flex align-items-center fw-bold'> <FaRegPlayCircle style={{marginRight: "3px"}} /> {data.type}</p>}
                {data.rank &&  <p className='d-flex align-items-center spotlight fw-bold' >#{data.rank} spotlight</p> } 
            </div> 
                }
            </div>      
        </div>
    )
}



register();

const Slider = () => {
  const swiperElRef = useRef(null);
  const [airingAnime, setAiringAnime] = useState()

  useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
 
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {

    });
  }, []);

  useEffect(() => {
    async function getDetails() {
        const res = await getAnimeAiringNow();
         setAiringAnime([...res.data.filter((item,index) => index < 10)]);
         
    }
    getDetails();
    return (
      setAiringAnime(null)
    )
   
},[])

  return (
    <div className='slider-wrapper d-flex justify-content-center align-items-end'>
          <swiper-container
            ref={swiperElRef}
            speed = "800"
            slides-per-view="1"
            navigation="true"
            pagination="true"
            autoplay = "true"
          >

                {airingAnime &&  airingAnime.map(anime => (<swiper-slide key = {anime?.mal_id} ><Link to = {`/animeDetail/${anime?.mal_id}`} style={{textDecoration: "none"}} ><Slide data = {anime} /></Link></swiper-slide>))}
                
          </swiper-container>
    </div>
    
  );
};

export default Slider
