import './MovieFavoritos.scss'
import { Link } from 'react-router-dom'
const MovieFavoritos = (props) => {



    return (
        <div className='movie-container-externo'>
            {props.movie &&
                <div className='movie-container'>
                    <Link key={props.movie.id} to={`/detalle/${props.movie.imdbID}`}>
                        <img className="poster" src={props.movie.Poster}></img>
                    </Link>
                </div>
            }
        </div>
    )
}
export default MovieFavoritos