import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action'
import { getMovieCastAction } from '@/core/actions/movie/get-movie-cast.action'
import { searchMoviesAction } from '@/core/actions/movies/search.action'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

interface UseMovieOptions {
  id?: number;
  searchTerm?: string;
}

export const useMovie = ({id, searchTerm}: UseMovieOptions) => {
  const movieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: async () => id !== undefined ? getMovieByIdAction(id) : Promise.reject('No ID provided'),
    staleTime: 1000 * 60 * 60 * 24
  })
  const castQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: async () => id !== undefined ? getMovieCastAction(id) : Promise.reject('No ID provided'),
    staleTime: 1000 * 60 * 60 * 24
  })
  const searchQuery = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: async () => searchTerm ? searchMoviesAction(searchTerm) : Promise.reject('No search term provided'),
    staleTime: 1000 * 60 * 5,
    enabled: !!searchTerm,
  })
  return {
    movieQuery,
    castQuery,
    searchQuery
  };
}
