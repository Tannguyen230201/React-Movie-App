/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";
// import "../Content/Content.scss"
// import { Link } from "react-router-dom"
import Content from "../Content/Content";
import LoadingIcon from "../Loading/Loading";

const style = {
  width: "100%",
  maxWidth: "1260px",
  padding:"0 0 40px 0"
};
const DetailMovies = () => {
  const [currentMovieDetail, setMovie] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`
        // `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setLoading(false);
          } else {
            setLoading(true);
          }
          return setMovie(data);
        });
      window.scrollTo(0, 0);
    }, 1000);
  }, [id]);

  return loading ? (
    <LoadingIcon />
  ) : (
    <div className="movie">
      {console.log(currentMovieDetail)}
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
            <div className="movie__genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div style={style}>
        <Content link='person' id={id} typeName="casts" name="CAST" />
      </div>
      <div style={{ width: "100%", padding: "0 0px 50px 0px" }}>
        <h1 className="heading">
          VIDEOS
          <div className="div"></div>
        </h1>
        <iframe
          class="videos"
          //   width="100%"
          //   height="700px"
          src={`https://www.youtube.com/embed/${currentMovieDetail.videos.results[0]?.key}`}
          title="Luther: The Fallen Sun | Official Trailer | Netflix"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
        ></iframe>
      </div>
      <div style={style}>
        <Content link='movie' id={id} typeName="similar" name="YOU MAY ALSO LIKE" />
      </div>
    </div>
  );
};

export default DetailMovies;
