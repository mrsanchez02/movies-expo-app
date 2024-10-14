import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'

interface MoviePosterProps {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({poster, id, smallPoster = false, className}: MoviePosterProps) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={() => {

      }}
    >
      <Image 
        source={{uri: poster}} 
        style={{width: smallPoster ? 90 : 170, height: smallPoster ? 130 : 250}} 
        className='rounded-2xl shadow-lg w-full h-full'
        resizeMode='cover'
      />
    </Pressable>
  )
}

export default MoviePoster