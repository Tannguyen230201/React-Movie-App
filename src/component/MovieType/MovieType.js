import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../MovieType/MovieType.scss';
import LoadingIcon from "../Loading/Loading";
import {BsFillPlayCircleFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'


const MovieType = () => {
    const { type } = useParams()
    const [movieByTyPe, setMovieByTyPe] = useState([]);
    const [loading1, setLoading1] = useState(true);
    const [page, setPage] = useState(1);
    useEffect(() => {
        setLoading1(true)
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    if(data?.results) {
                        setLoading1(false)
                    }
                    else {
                        setLoading1(true)
                    }
                    return setMovieByTyPe(data.results)
                })
            window.scrollTo(0, 0)
        }, 500);
    }, [type, page])
    useEffect(()=>{
        setPage(1)
    },[type])

    return  loading1 ? (<LoadingIcon/>) :  (
        <div className="movie_Type " >
            <div className="container content_Movie_Type">
            {
                type === 'upcoming' ? <h3 style={{color:'#fff',paddingBottom:'20px',fontWeight:'700'}}>Upcomming</h3> :'' ||
                type === 'top_rated' ? <h3 style={{color:'#fff',paddingBottom:'20px',fontWeight:'700'}}>Top Rated</h3> :'' ||
                type === 'popular' ? <h3 style={{color:'#fff',paddingBottom:'20px',fontWeight:'700'}}>Popular</h3> :''
            }
            <div className="row" >
                    {
                        movieByTyPe.map(movie => (
                            <div className="col-6 col-lg-3 col-md-4 col-sm-6 " style={{paddingBottom:'20px'}}>
                                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                                    <div className="cards_Movie_Type ">
                                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="img" />
                                        <div className="ytb">
                                            <BsFillPlayCircleFill className="icon_ytb"  />
                                        </div>
                                        <div className="grap_title">
                                            <div className="vote">
                                                <span>{movie?.vote_average}</span>
                                                <span><AiFillStar style={{margin:'0px 0px 3px 5px'}}/></span> 
                                            </div>
                                            <div className="date">
                                                <span>{movie.release_date}</span>
                                            </div>
                                            <div className="title">
                                                {movie?.original_title}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <Link to={`/movie/type/${type}/${page+1}`} style={{ textDecoration: "none",fontWeight:'700',color:'#fff' }} onClick={() => setPage(page+1)}>LOAD MORE</Link>
            </div>

        </div>
    )
}
export default MovieType;