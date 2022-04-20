import { connect } from "react-redux";
import * as actionsCreators from '../Redux/Actions'
import { bindActionCreators } from "redux";

const AgregarMovie = (state) => {
    return (
        <div>
            <form>
                <label>Nombre De pelicula</label>
                <input name="nombre" placeholder="Nombre"></input>
            </form>
            {console.log(state)}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        movies: state.cartelera
    }
};
const mapDispatchProps = (dispatch) => {
    bindActionCreators(actionsCreators, dispatch)
};
export default connect(mapStateToProps, mapDispatchProps)(AgregarMovie);
