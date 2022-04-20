import './CarteleraBuscador.scss';
import React from "react"
import { connect } from "react-redux";
import Movie from "../Movie/Movie";

const CarteleraBuscador = ({ movies }) => {
    return (
        <div className='cartelera-container'>
            {movies.filter((value, index, arrCiudades) =>
                arrCiudades.findIndex(v => v.imdbID === value.imdbID) === index).map((e => {
                    return (
                        <div key={e.imdbID}>
                            <Movie key={e.imdbID} movie={e} />
                        </div>
                    )
                }))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        movies: state.busqueda
    }
};
;
export default connect(mapStateToProps, null)(CarteleraBuscador);












