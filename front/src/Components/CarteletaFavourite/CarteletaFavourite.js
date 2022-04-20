import React from "react"
import './CarteletaFavourite.scss'
import { connect } from "react-redux";
import MovieFavoritos from "../MovieFavoritos/MovieFavoritos";
import { Link } from "react-router-dom";
import { addMovieFavorite } from "../Redux/Actions";

const CarteleraFavourite = ({ favoritas }) => {
    return (
        <div className='carteleraFavourite'>
            {favoritas.filter((value, index, arrCiudades)=> arrCiudades.findIndex(v => v.imdbID === value.imdbID) === index).map((e => {
                return (
                    <div  >
                        <Link key={e.id} to={`/detalle/${e.imdbID}`}>
                            <MovieFavoritos key={e.id} movie={e} />
                        </Link>
                    </div>
                )
            }))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favoritas: state.favoritas
    }
};

export default connect(mapStateToProps, { addMovieFavorite })(CarteleraFavourite);












