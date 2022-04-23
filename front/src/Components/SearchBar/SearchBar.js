import './SearchBar.scss'
import { connect } from "react-redux";
import * as actionsCreators from '../Redux/Actions'
import { bindActionCreators } from "redux";
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import lupa from './lupa.png'


const SearchBar = ({ classe, getMoviesBusqueda, state }) => {
    const [titulo, setTitulo] = useState("")
    const [mostrarInput, setMostrarInput] = useState(false)
    let navigate = useNavigate();

    const handleInputChange = (e) => {
        setTitulo(e.target.value)
    }

    const handleSubmit = (e) => {
        setMostrarInput(!mostrarInput)
        navigate("/buscadas");
        e.preventDefault()
        getMoviesBusqueda(titulo)
        document.getElementById("inpt2").value = ""
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <div className={`SearchBar-contenedor ${classe}`}>
                    <div className="SearchBar-contenedor-lupa">
                        <NavLink to='/' onClick={handleSubmit}>
                            <img className="lupa" src={lupa}></img>
                        </NavLink>
                    </div>
                    <div>
                        <input type="search" onChange={handleInputChange} class="form-control form-control-dark" placeholder="Search..." aria-label="Search"></input>
                    </div>
                </div>
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
