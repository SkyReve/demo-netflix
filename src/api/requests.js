const requests = {
  fetchNowPlaying: 'movie/now_playing/',
  fetchNetfilxOriginals: '/discover/tv/?with_original_language=ko&include_adult=true&sort_by=popularity.desc',
  fetchTrending: '/trending/all/week/',
  fetchUpcoming: '/movie/upcoming/',
  fetchActionMovies: '/discover/movie/?with_genres=28',
  fetchComedyMovies: '/discover/movie/?with_genres=35',
  fetchHorrorMovies: '/discover/movie/?with_genres=27',
  fetchRomanceMovies: '/discover/movie/?with_genres=10749',
  fetchDocumentariesMovies: '/discover/movie/?with_genres=99&include_video=true',
};

export default requests;
