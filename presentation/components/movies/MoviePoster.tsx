import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Pressable, View } from 'react-native';

interface MoviePosterProps {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const placeholder = { uri: 'https://placehold.co/400x600/png' }

const MoviePoster = ({ poster, id, smallPoster = false, className }: MoviePosterProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const width = smallPoster ? 90 : 170;
  const height = smallPoster ? 130 : 250;

  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <View style={{ width, height }} className='relative'>
        {isLoading && (
          <View className='absolute inset-0 z-10 items-center justify-center rounded-2xl bg-black/20'>
            <ActivityIndicator color='white' />
          </View>
        )}

        <Image
          source={{ uri: poster || placeholder.uri }}
          style={{ width, height }}
          className={`${isLoading ? '' : 'rounded-2xl'} shadow-lg w-full h-full`}
          resizeMode='cover'
          defaultSource={placeholder}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </View>
    </Pressable>
  )
}

export default MoviePoster
