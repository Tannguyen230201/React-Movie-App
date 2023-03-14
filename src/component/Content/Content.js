import { useEffect, useState } from 'react'
import '../Content/Content.scss'
import { Link } from 'react-router-dom'
import LoadingIcon from '../Loading/Loading'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useRef } from 'react';
import { SmoothHorizontalScroolling } from '../utils/Utils';

const Content = (props) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const slideRef =useRef();
    const movieRef = useRef();

    const handScrollRight = () =>{
        const maxScrollLeft = slideRef.current.scrollWidth - slideRef.current.clientWidth;
        console.log(maxScrollLeft)
        if(slideRef.current.scrollLeft < maxScrollLeft){
            SmoothHorizontalScroolling(slideRef.current,
                250,
                movieRef.current.clientWidth *2,
                slideRef.current.scrollLeft)
        }
    }
    const handScrollLeft = () =>{
        if(slideRef.current.scrollLeft > 0){
            SmoothHorizontalScroolling(slideRef.current,
                250,
                -movieRef.current.clientWidth *2,
                slideRef.current.scrollLeft)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            // 'https://api.themoviedb.org/3/movie/315162/casts?api_key=e9e9d8da18ae29fc430845952232787c'
            // 'https://api.themoviedb.org/3/movie/297762/similar?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1'
            fetch(`https://api.themoviedb.org/3/movie/${props.id}/${props.typeName}?api_key=ae223abf79fccfa16e538b2017ffdfd0&language=en-US&page=1`)
                .then(res => res.json())
                .then(res => setMovies(res.results || res.cast))
            setLoading(false);
        }, 2000);
    }, [props.typeName,props.id])
    const style = {
        gridTemplateColumns: `repeat(${movies.length},170px)`,
    }
    return loading ? (<LoadingIcon/>) : (
        <div>
            <div className="movies_row_container">
                <h1 className="heading">
                    {props.name}
                    <div></div>
                </h1>
                <div className='movie_slider' style={style} ref={slideRef}>
                    { 
                        movies.map((movie) => (
                            
                            <Link to={`/movie/${movie.id}` } style={{ textDecoration: "none", color: "white" }}>
                                <div key={movie.id} className="movie_item" ref={movieRef} >
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path ||  movie.profile_path }`} alt="" />
                                    <div className="movie_name">{movie.original_title ||movie.original_name}</div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className='btnLeft'  onClick={handScrollLeft}>
                    <FiChevronLeft />
                </div>
                <div className='btnRight' onClick={handScrollRight}>
                    <FiChevronRight/>
                </div>
            </div>
        </div>
    )
}
export default Content;