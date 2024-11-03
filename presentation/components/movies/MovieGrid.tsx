import { Movie } from '@/infrastructure/interfaces/movie.interface'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
  movieList: Movie[]
}

const MovieGrid = ({ movieList }: Props) => {
  return (
    <>
      <View className='flex flex-wrap gap-4 flex-row justify-start'>
        {movieList.map((movie, i) => (
          <View>
            <MoviePoster key={`${i}-${movie.id}`} id={movie.id} poster={movie.poster} smallPoster />
          </View>
        ))}
      </View>
    </>
  )
}

export default MovieGrid