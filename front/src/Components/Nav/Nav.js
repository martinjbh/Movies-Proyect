import './Nav.scss'
import { NavLink } from "react-router-dom"
import { connect } from "react-redux";
import * as actionsCreators from '../Redux/Actions'
import { bindActionCreators } from "redux";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getMovies } from '../Redux/Actions'
import logo from './logo.png'

const Nav = (props) => {
    const dispatch = useDispatch()
    const [reload, setReload] = useState(true)
    useEffect(() => {
        dispatch(getMovies("harry Potter"))
        dispatch(getMovies("terror"))
        dispatch(getMovies("miedo"))
        dispatch(getMovies("lord"))
        dispatch(getMovies("comedia"))
        dispatch(getMovies("angel"))
        dispatch(getMovies("mar"))
    }, [reload])
    const actualizar = () => {
        setReload(!reload)
    }
    return (
        <div className='nav-contenedor'>
            <div className='nav-contenedor-ambos'>
                <NavLink className="nav-contenedor-button-favoritas" to={`/`}>
                    Home
                </NavLink>
                <NavLink className="nav-contenedor-button-favoritas navlink" to={`/favoritas`}>
                    Favoritas
                </NavLink>
            </div>
            <div class="searchBar">
                <SearchBar />
            </div>
{/*             
            <div class="account-dropdown-button user">
                <a href="/YourAccount" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="Mio martin! - Cuenta y configuración">
                    <span class="profile-link" role="presentation">
                        <img class="profile-icon" src="https://occ-0-5376-1740.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABayVgGi3dnRy8BN94ufkzx0MjtGC9FogPXt-VFwcOP9T_7A6VycGIBOoQuo-djQ597ltTv_WRm4ycC6ec_nOvP8.png?r=c13" alt="" />
                    </span>
                </a>
                <span class="caret" role="presentation">
                </span>
            </div> */}

        </div>
    )
}




export default connect()(Nav)