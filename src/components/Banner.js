import React, { useState, useEffect, useContext } from "react";
import requests from "../api/requests";
import YouTube from "react-youtube";
import axios from "../api/axios";
import { CommonStateContext } from "../App";
import MovieModal from "./MovieModal/MovieModal";
import { styled } from "styled-components";
import "./Banner.css";

const YouTubeOpts = {
  width: "100%",
  height: 500,
  playerVars: {
    autoplay: 1,
    rel: 0,
    modestbranding: 1,
    controls: 0,
    loop: 1,
  },
};

function Banner(props) {
  const [movie, setMovie] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { isClicked, setIsClicked } = useContext(CommonStateContext);
  let videosArr = [];

  const BannerContents = styled.div`
    @media screen and (max-width: 768px) {
      position: relative;
      width: 92% !important;
      padding-top: 100px !important;
      margin-left: 0px !important;
      height: 127px !important;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: end;

      background-image: url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}");
      background-position: center;
      background-size: cover;
    }
    margin-left: 40px;
    padding-top: 140px;
    height: 190px;
  `;

  const Banner = styled.header`
    color: white;
    object-fit: contain;
    height: 448px;
    background-image: url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}");
    background-position: top center;
    background-size: cover;

    @media screen and (min-width: 1500px) {
      position: relative;
      height: 700px;
    }

    @media screen and (max-width: 768px) {
      padding-top: 70px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: fit-content;
      align-items: center;

      background-image: unset;
      background-position: unset;
      background-size: unset;
    }
  `;

  let backgroudMedia = window.matchMedia("(max-width: 768px)");
  const applyBackgroudCss = (e) => {
    if (e.matches) {
      console.log("미디어 호출");
    }
  };
  backgroudMedia.addEventListener("change", applyBackgroudCss);

  const fetchData = async () => {
    // 현재 상영중인 영화정보를 가져오기(여러 영화)
    const request = await axios.get(requests.fetchNowPlaying);

    do {
      // 여러 영화중 하나의 영화 ID를 가져오기
      const movieId =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ].id;

      // 특정 영화의 상세정보 가져오기(동영상 포함)
      const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
        params: { append_to_response: "videos" },
      });

      // 비디오가 있고 기존 영화정보가 없을때 만 setMovie
      if (
        movieDetail.results.videos.results.length > 0 &&
        videosArr.length === 0
      ) {
        movieDetail.results.officialVideos = [];
        for (let obj of movieDetail.results.videos.results) {
          if (obj.type === "Teaser" || obj.type === "Trailer") {
            movieDetail.results.officialVideos.push(obj);
          }
        }
        videosArr.push(movieDetail.results);
        setMovie(videosArr[0]);
      }
    } while (videosArr.length === 0);
  };

  useEffect(() => {
    fetchData();
  }, [props.baseURL]);

  const handleClick = () => {
    setModalOpen(true);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const onPlayerReady = (e) => {
    e.target.mute();
    e.target.playVideo();
  };

  if (!isClicked) {
    return (
      <Banner>
        <BannerContents>
          <h1 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h1>
          <h1 className="banner__description">
            {truncate(movie.overview, 100)}
          </h1>
          <div className="banner__genre">
            {movie.genres &&
              movie.genres.map((obj, idx) => (
                <span key={obj.id} className="banner__genre__item">
                  {obj.name + (idx === movie.genres.length - 1 ? " " : " • ")}
                </span>
              ))}
          </div>
          <div className="banner__buttons">
            <button
              className="banner__button play"
              onClick={() => setIsClicked(true)}
            >
              ▶︎ 재생
            </button>
            <button
              className="banner__button info"
              onClick={() => handleClick(movie)}
            >
              ⓘ 상세 정보
            </button>
          </div>
        </BannerContents>
        <div className="banner--fadeBottom"></div>
        {modalOpen && <MovieModal {...movie} setModalOpen={setModalOpen} />}
      </Banner>
    );
  } else {
    return (
      <YouTube
        videoId={movie.officialVideos[0].key}
        opts={YouTubeOpts}
        id={movie.id}
        style={{ paddingTop: 70 }}
        onReady={(e) => onPlayerReady(e)}
      ></YouTube>
    );
  }
}

export default React.memo(Banner);
