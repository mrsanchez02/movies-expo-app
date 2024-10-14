import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upComingMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

export const useMovies = () => {

  // Queries
  const nowPlayingQuery = useQuery({ 
    queryKey: ['movies', 'now-playing'], 
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
   })

  const popularQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'popular'], 
    queryFn: ({ pageParam }) => {
      return popularMoviesAction({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (_, pages) => pages.length + 1
   })

  const topRatedQuery = useInfiniteQuery({ 
    initialPageParam: 1,
    queryKey: ['movies', 'top-rated'], 
    queryFn: ({ pageParam }) => {
      // console.log('pageParam', pageParam);
      return topRatedMoviesAction({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (_, pages) => pages.length + 1
  })

  const upComingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'upcoming'], 
    queryFn: ({pageParam}) => {
      return upComingMoviesAction({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (_, pages) => pages.length + 1
   })

   return {
      nowPlayingQuery,
      popularQuery,
      topRatedQuery,
      upComingQuery
   }
}