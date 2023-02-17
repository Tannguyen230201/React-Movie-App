import { useEffect, useState } from 'react'
import '../Content/Content.scss'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import LoadingIcon from '../Loading/Loading'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


const gotoTop = () => {
    scroll.scrollToTop();
}

const Content = (props) => {
    const [movies, setMovies] = useState([]);
    const [goToTop, setGoToTop] = useState(0);
    const [loading, setLoading] = useState(true);
    const handleScrollY = () => {
        setGoToTop(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
        }

    }, [])
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.themoviedb.org/3/movie/${props.typeName}?api_key=ae223abf79fccfa16e538b2017ffdfd0&language=en-US&page=1`)
                .then(res => res.json())
                .then(res => setMovies(res.results))
            setLoading(false);
        }, 2000);
    }, [props.typeName])
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
                <div className='movie_slider' style={style}>

                    {
                        movies.map((movie) => (
                            // <Slider {...settings}>
                            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                                <div key={movie.id} className="movie_item"  >
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                                    <div className="movie_name">{movie.original_title}</div>
                                </div>
                            </Link>
                            // </Slider> 
                        ))
                    }

                </div>
            </div>

            <FaArrowAltCircleUp className='goToTop' offset={50} duration={500} onClick={gotoTop}
                style={goToTop < 500 ? { color: 'rgba(232, 221, 221, 0)' } : { color: 'rgba(232, 221, 221, 1)' }}
            />
        </div>
    )
}
export default Content;