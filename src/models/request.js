const API_KEY = "269920b58d27ae83df31c16d48dc6041";
// /movie/upcoming /movie/popular
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchTopRatedMovies :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopularMovies :`/movie/popular?api_key=${API_KEY}&language=en-US`,
}
export default requests;