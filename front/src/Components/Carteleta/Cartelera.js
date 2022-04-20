import React from "react"
import './Cartelera.scss'
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import { Link } from "react-router-dom";
import yellowStar from '../Movie/estrellamarilla.png'
import blackstar from '../Movie/estrella.png'
import { addMovieFavorite } from "../Redux/Actions";
const Cartelera = ({ movies, addMovieFavorite }) => {
    return (
        <div className='cartelera-container'>
        
            {movies.filter((value, index, arrCiudades)=> 
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
        movies: state.cartelera
    }
};
;
export default connect(mapStateToProps, { addMovieFavorite })(Cartelera);












