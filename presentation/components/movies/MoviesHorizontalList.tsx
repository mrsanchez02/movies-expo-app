import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster';

interface MoviesHorizontalListProps {
  title?: string;
  movies: Movie[];
  className?: string;

  loadNextPage?: () => void;
}

const MoviesHorizontalList = ({ movies, title, className, loadNextPage}: MoviesHorizontalListProps) => {

  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  },[movies])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

    if (!isEndReached) return;

    isLoading.current = true;

    // TODO fetch more movies
    // console.log('fetch more movies');

    loadNextPage && loadNextPage();

  }

  return (
    <View className={`${className}`}>
      {title && <Text className='text-2xl font-bold px-4 mb-2 text-white'>{title}</Text>}
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  )
}

export default MoviesHorizontalList