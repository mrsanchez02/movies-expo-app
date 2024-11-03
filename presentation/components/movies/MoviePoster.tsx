import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable } from 'react-native';

interface MoviePosterProps {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const placeholder = { uri: 'https://placehold.co/400x600/png' }

const MoviePoster = ({ poster, id, smallPoster = false, className }: MoviePosterProps) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: poster || placeholder.uri }}
        style={{ width: smallPoster ? 90 : 170, height: smallPoster ? 130 : 250 }}
        className='rounded-2xl shadow-lg w-full h-full'
        resizeMode='cover'
        defaultSource={placeholder}
      />
    </Pressable>
  )
}

export default MoviePoster