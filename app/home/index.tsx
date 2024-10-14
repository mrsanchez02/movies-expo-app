import React from 'react'
import { View, Text, ActivityIndicator, ScrollView, Pressable, Platform } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import { Ionicons } from '@expo/vector-icons';
import MoviesHorizontalList from '@/presentation/components/movies/MoviesHorizontalList';
import { openBrowserAsync } from 'expo-web-browser';

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
      <View style={{marginTop: top}} className='mt-2 pb-10'>
        <Text className='text-3xl font-bold px-4 mb-2'>Movie App</Text>
        {/* Carousel Movies */}
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        {/* Popular List Movies */}
        <MoviesHorizontalList movies={popularQuery.data?.pages.flat() ?? []} title='Popular' className='mb-5' />
        {/* Top Rated List Movies */}
        <MoviesHorizontalList movies={topRatedQuery.data?.pages.flat() ?? []} title='Top Rated' className='mb-5' loadNextPage={topRatedQuery.fetchNextPage}/>
        {/* Upcoming List Movies */}
        <MoviesHorizontalList movies={upComingQuery.data?.pages.flat() ?? []} title='Upcoming' className='mb-5' />
        <View className='flex-row justify-center items-baseline'>
          <Text>Provided by: {' '}
          <Pressable
          onPress={async () => {
            if (Platform.OS !== 'web') {
              await openBrowserAsync('https://www.themoviedb.org')
            }
          }}
        ><Text className='underline'>www.themoviedb.org</Text></Pressable>
        </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen