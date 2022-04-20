export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE", payload: payload };
}
export function getMovies(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=a19959ce&s=" + titulo)
      .then(response => response.json())
      .then(json => {

        dispatch({ type: "GET_MOVIES", movies: json.Search, });
      });
  };
}
export function getMoviesBusqueda(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=a19959ce&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES_BUSQUEDA", movies: json.Search });
      });
  };
}
export function removeMovieFavorite(payload) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload };
}
export function getMovieDetail(titulo) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=a19959ce&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        // console.log(json.Search)
      });
  };
}
export function starTrueFalse(payload) {
  return { type: "STAR_TRUE_FALSE", payload: payload }
}




