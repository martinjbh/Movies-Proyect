import Cartelera from '../Carteleta/Cartelera'
import { useDispatch, useSelector } from 'react-redux'
import './Home.scss'
import Carrusel from '../Carrucel/Carrusel'
const Home = () => {
    const state = useSelector(state => state)
    return (
        <div className='home-container'>
      
            <Cartelera />

        </div>
    )
}
export default Home