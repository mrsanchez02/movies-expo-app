import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upComingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

  // Queries
  const nowPlayingQuery = useQuery({ 
    queryKey: ['movies', 'now-playing'], 
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
   })

  const popularQuery = useQuery({ 
    queryKey: ['movies', 'popular'], 
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
   })

  const topRatedQuery = useQuery({ 
    queryKey: ['movies', 'top-rated'], 
    queryFn: topRatedMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
   })

  const upComingQuery = useQuery({ 
    queryKey: ['movies', 'upcoming'], 
    queryFn: upComingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
   })

   return {
      nowPlayingQuery,
      popularQuery,
      topRatedQuery,
      upComingQuery
   }
}