import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/movie/now_playing");
    const movies = data.results.map(MovieMapper.fromMovieDBToMovie);
    // console.log(JSON.stringify(movies, null, 2));
    return movies;

  } catch (error) {
    console.log(error);
    throw new Error("Error fetching now playing movies");
    
  }
}