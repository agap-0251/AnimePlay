import { Link } from "react-router-dom";
import Card from "./Card";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "./homepage.css"

register();
const AniGridContainer = ({ data }) => {
  const swiperElRef = useRef(null);
  const [noOfSlides, setNoOfSlides] = useState(7);

  useEffect(() => {
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {});
    window.addEventListener("resize", () => {
      let winWidth = window.innerWidth;

      if (winWidth <= 372) setNoOfSlides(1);
      else if (winWidth <= 704) setNoOfSlides(2);
      else if (winWidth <= 767) setNoOfSlides(3);
      else if (winWidth <= 840) setNoOfSlides(3);
      else if (winWidth >= 1140 && winWidth <= 1260) setNoOfSlides(5);
      else setNoOfSlides(Math.floor(winWidth / 190.0));
    });
  }, []);

  return (
    <div className="ani-grid-container d-flex justify-content-center align-items-center">
      <swiper-container
        ref={swiperElRef}
        slides-per-view={noOfSlides}
        navigation="true"
        pagination="false"
        autoplay="true"
      >
        {data &&
          data.map((animeItem) => (
            <swiper-slide key={animeItem?.mal_id}>
              <Link
                to={`/animeDetail/${animeItem?.mal_id}`}
                style={{ textDecoration: "none" }}
              >
                <Card data={animeItem} />
              </Link>
            </swiper-slide>
          ))}
      </swiper-container>
    </div>
  );
};

export default AniGridContainer;
