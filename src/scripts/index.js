export const fetchPopularMovies = () => {
    const popularMoviesUrl = `https://api.themoviedb.org/${process.env.REACT_APP_API_VERSION}/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}`;
    return fetch(popularMoviesUrl).then(res => res.json());
}

export const fetchAllGenres = () => {
    const genresUrl = `https://api.themoviedb.org/${process.env.REACT_APP_API_VERSION}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;
    return fetch(genresUrl).then(res => res.json())
}

export const searchMovies = (keyword) => {
    // if (typeof year === "number" && year >= 0) {

    // }
    const encodedQuery = encodeURI(keyword);
    const searchUrl = `https://api.themoviedb.org/${process.env.REACT_APP_API_VERSION}/search/movie?query=${encodedQuery}&api_key=${process.env.REACT_APP_API_KEY}`;

    return fetch(searchUrl).then(res => res.json());
}

// export const debounce = (callback, delay = 500) => {
//     let timeoutId;
//     return (...args) => {
//         clearTimeout(timeoutId)
//         timeoutId = setTimeout(() => {
//             timeoutId = null
//             callback(...args)
//         }, delay)
//     }
// }
export function debounce(callback, time = 1000) {
	var timeout;
	return function() {
		var context = this;
		var args = arguments;
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(function() {
			timeout = null;
			callback.apply(context, args);
		}, time);
	}
}