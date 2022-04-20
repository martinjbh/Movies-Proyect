const initialState = {
  cartelera: [],
  favoritas: [],
  detalles: [],
  busqueda:[]
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES": {
      return ({
        ...state, cartelera: [...state.cartelera, ...action.movies.filter((e) => {
          e.start = false
          return e
        })]
      })
    }
    case "GET_MOVIES_BUSQUEDA": {
      return ({
        ...state, busqueda: [...action.movies]
      })
    }
    case "ADD_MOVIE_FAVORITE": {
      return ({
        ...state, favoritas: [...state.favoritas, action.payload]
      })
    }
    case "GET_MOVIE_DETAILS": {
      return ({
        ...state, detalles: [...state.favoritas, action.payload]
      })
    }
    case "STAR_TRUE_FALSE": {
      return ({
        ...state, cartelera: state.cartelera.filter((e) => {
          if (action.payload == e.imdbID) {
            if (e.start == false) {
              e.start = true
            } else {
              e.start = false
            }
          }
          return e
        })
      })
    }
    default:
      return state
  }
}

export default Reducer;



// state.cartelera.map((e) => {
//   if (action.payload == e.imdbID) {
//     e.start=true
//   }

// }




