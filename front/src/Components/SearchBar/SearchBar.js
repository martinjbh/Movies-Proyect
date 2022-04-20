import './SearchBar.scss'
import { connect } from "react-redux";
import * as actionsCreators from '../Redux/Actions'
import { bindActionCreators } from "redux";
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import lupa from './lupa.png'


const SearchBar = ({ classe, getMoviesBusqueda, state }) => {
    const [titulo, setTitulo] = useState("")
    let navigate = useNavigate();

    const handleInputChange = (e) => {
        setTitulo(e.target.value)
    }
    
    const handleSubmit = (e) => {
        navigate("/buscadas");
        e.preventDefault()
        getMoviesBusqueda(titulo)
        document.getElementById("inpt2").value = ""
    }
    return (
        <div className={`SearchBar-contenedor ${classe}`}>
            <form onSubmit={handleSubmit}>
                <NavLink to='/' onClick={handleSubmit}><img className="SearchBar-contenedor-lupa" src={lupa}></img></NavLink>
                <input id='inpt2' onChange={handleInputChange} name="nombre" placeholder='Escriba su Pelicula...'></input>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        state
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionsCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
