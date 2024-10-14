import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const popularMoviesAction = async ({page = 1, limit = 10}: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/popular", {
      params: {
        page,
        limit
      }
    });
    const movies = data.results.map(MovieMapper.fromMovieDBToMovie);
    // console.log(JSON.stringify(movies, null, 2));
    return movies;

  } catch (error) {
    console.log(error);
    throw new Error("Error fetching popular movies");
    
  }
}