import React from 'react'
import { View, Text, ActivityIndicator, ScrollView, Pressable, Platform } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import { Ionicons } from '@expo/vector-icons';
import MoviesHorizontalList from '@/presentation/components/movies/MoviesHorizontalList';
import { openBrowserAsync } from 'expo-web-browser';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upComingQuery } = useMovies();


  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator size='large' color='purple' />
      </View>
    )
  }

  return (
    <ScrollView>
      <StatusBar style='light' />
      <View style={{ paddingTop: top }} className='pt-2 pb-10 bg-slate-500'>
        <View className='flex flex-row justify-between mx-4 pt-4'>
          <Text className='text-3xl font-bold px-4 mb-2 text-white'>Qué pelicula ver?</Text>
          <Pressable
            onPress={() => router.push('/search')}
          >
            <Ionicons name='search' size={20} color='white' />
          </Pressable>
        </View>
        {/* Carousel Movies */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        {/* Popular List Movies */}
        <MoviesHorizontalList movies={popularQuery.data?.pages.flat() ?? []} title='Popular' className='mb-5' />
        {/* Top Rated List Movies */}
        <MoviesHorizontalList movies={topRatedQuery.data?.pages.flat() ?? []} title='Mejor Clasificadas' className='mb-5' loadNextPage={topRatedQuery.fetchNextPage} />
        {/* Upcoming List Movies */}
        <MoviesHorizontalList movies={upComingQuery.data?.pages.flat() ?? []} title='Proximamente' className='mb-5' />
        <View className='flex-row justify-center items-baseline'>
          <Text>Provided by: {' '}
            <Pressable
              onPress={async () => {
                if (Platform.OS !== 'web') {
                  await openBrowserAsync('https://www.themoviedb.org')
                }
              }}
            ><Text className='underline text-white'>www.themoviedb.org</Text></Pressable>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen