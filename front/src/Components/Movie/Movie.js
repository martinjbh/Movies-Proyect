import './Movie.scss'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import yellowStar from '../Movie/estrellamarilla.png'
import blackstar from '../Movie/estrella.png'
import { useState } from 'react'
import { addMovieFavorite } from '../Redux/Actions'
import { starTrueFalse } from '../Redux/Actions'
const Movie = (props) => {

    const [star, setStar] = useState(props.movie.start)
    const dispatch = useDispatch()
    const estado = useSelector(state => state.cartelera)

    const enviar = () => {
        dispatch(starTrueFalse(props.movie.imdbID))
        if (star == true) {
            setStar(false)
        } else {
            dispatch(addMovieFavorite(props.movie))
            setStar(true)
        }
    }
    return (
        <div className='movie-container-externo'>
            {props.movie &&
                <div className='movie-container'>
                    {star || <img onClick={enviar} className="yellow-star" src={blackstar}></img>}
                    {star && <img onClick={enviar} className="yellow-star" src={yellowStar}></img>}
                    <Link key={props.movie.id} to={`/detalle/${props.movie.imdbID}`}>
                        <img className="poster" src={props.movie.Poster}></img>
                    </Link>
                </div>
            }
        </div>
    )
}
export default Movie