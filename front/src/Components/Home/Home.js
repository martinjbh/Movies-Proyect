import Cartelera from '../Carteleta/Cartelera'
import { useDispatch, useSelector } from 'react-redux'
import './Home.scss'
const Home = () => {
const state=useSelector(state=>state)
    return (
        <div className='home-container'>
        {/* {console.log(state)} */}
            <Cartelera />
       
        </div>
    )
}
export default Home