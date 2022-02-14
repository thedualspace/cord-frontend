export const fetchPopularMovies = () => {
    const popularMoviesUrl = `https://api.themoviedb.org/${process.env.REACT_APP_API_VERSION}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
    return fetch(popularMoviesUrl).then(res => res.json());
}

export const fetchAllGenres = () => {
    const genresUrl = `https://api.themoviedb.org/${process.env.REACT_APP_API_VERSION}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;
    return fetch(genresUrl).then(res => res.json())
}


export const searchMovies = (keyword, year) => {
    // Planned to do validation checks on year to make sure it was a number, a valid year etc
    // But the API handles this gracefully for us. Non-numerical entries do not return an errored response.
    const encodedQuery = encodeURI(keyword);
    const searchUrl =
        `https://api.themoviedb.org/${process.env.REACT_APP_API_VERSION}/search/movie?query=${encodedQuery}&api_key=${process.env.REACT_APP_API_KEY}&year=${year}`

    return fetch(searchUrl).then(res => res.json());
}