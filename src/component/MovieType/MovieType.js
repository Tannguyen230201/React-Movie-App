import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../MovieType/MovieType.scss';
import LoadingIcon from "../Loading/Loading";
const MovieType = () => {
    const { type } = useParams()
    const [movieByTyPe, setMovieByTyPe] = useState([]);
    const [loading1, setLoading1] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=9`)
                .then(res => res.json())
                .then(data => setMovieByTyPe(data.results))
                setLoading1(false)
            window.scrollTo(0, 0)
        }, 500);
        
    }, [type])

    return loading1 ? (<LoadingIcon/>) :  (
        <div className="movie_Type " >
            <div className="container content_Movie_Type">
            <div className="row" >
                    {
                        movieByTyPe.map(movie => (
                            <div className="col-6 col-lg-3 col-md-4 col-sm-6 " >
                                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                                    <div className="cards_Movie_Type " >
                                        {/* <div className="cards__overlay"> */}
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                        {/* <div className="card__title">{movie ? movie.original_title : ""}</div> */}
                                        {/* <div className="card__runtime"> */}
                                        {/* {movie ? movie.release_date : ""} */}
                                        {/* <span className="card__rating">{movie ? movie.vote_average : ""}<i className="fas fa-star" /></span> */}
                                        {/* </div> */}
                                        {/* <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div> */}
                                        {/* </div> */}
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <Link to="/movie/type/popular/1">NEXT</Link>
            </div>

        </div>
    )
}
export default MovieType;