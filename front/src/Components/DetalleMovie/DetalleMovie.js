import './DetalleMovie.scss'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../Redux/Actions';

const DetalleMovie = (props) => {
    const params = useParams();
    const state = useSelector(state => state)
    return (
        <div>
            {state.cartelera.map((e, i) => {
                if (e.imdbID == params.id) {
                    console.log(e)
                    return (
                        <div key={i} className='detalleMovie-contenedor'>
                            <img src={e.Poster}></img>
                            <div className='detalleMovie-contenedor-back'>
                                <p>{e.Title}</p>
                                <p>{`Type:  ${e.Type}`}</p>
                                <p>{`Year:  ${e.Year}`}</p>
                            </div>

                        </div>
                    )
                }
            })}
        </div>
    )
}


export default DetalleMovie