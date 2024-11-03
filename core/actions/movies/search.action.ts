import { movieApi } from "@/core/api/movie-api";
import { MovieDBSearchResponse } from "@/infrastructure/interfaces/moviedb-search.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const searchMoviesAction = async (query: string) => {
  try {
    const { data } = await movieApi.get<MovieDBSearchResponse>('/search/movie', {
      params: {
        query,
        language: 'es-MX',
        include_adult: false,
      }
    });
    const movies = data.results.map(MovieMapper.fromMovieDBSearchToMovies);
    // console.log(movies);
    return movies;

  } catch (error) {
    console.log(error);
    throw new Error("Error fetching search movies");
  }
}