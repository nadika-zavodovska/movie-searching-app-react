const API_KEY = "6ff600132e4a5811ccd98ab685305be7";
// const BASE_URL = "https://www.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`api/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`api/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}
