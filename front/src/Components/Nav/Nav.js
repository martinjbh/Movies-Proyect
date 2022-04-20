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
            <img className='nav-contenedor-logo' src={logo}></img>
            <div className='nav-contenedor-botones'>
                <NavLink className="nav-contenedor-button-favoritas" to={`/`}>
                    Home
                </NavLink>
                <NavLink className="nav-contenedor-button-favoritas navlink" to={`/favoritas`}>
                    Favoritas
                </NavLink>

            </div>


            <SearchBar classe="searchBar" />
        </div>
    )
}




export default connect()(Nav)