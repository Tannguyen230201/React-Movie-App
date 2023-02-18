import { useEffect, useState } from 'react'
import '../Content/Content.scss'
import { Link } from 'react-router-dom'
import LoadingIcon from '../Loading/Loading'

const Content = (props) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
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
        </div>
    )
}
export default Content;