import MovieGrid from '@/presentation/components/movies/MovieGrid'
import { useMovie } from '@/presentation/hooks/useMovie'
import { Ionicons } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Pressable, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SearchScreen = () => {
  const { top } = useSafeAreaInsets()
  const navigation = useNavigation()

  const [search, setSearch] = useState('')
  const { searchQuery } = useMovie({ searchTerm: search })

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTitle: 'Buscador',
      headerTitleAlign: 'center',
      headerBackTitleVisible: false,
    })
  }, [])

  const handleSearch = () => {
    setTimeout(() => {
      searchQuery.refetch()
    }, 2000)
  }

  return (
    <>
    <StatusBar style='light' />
    <ScrollView className=' bg-slate-500'>
      <View style={{ paddingTop: top }} className='mt-2 pb-10'>
        <View className='flex mx-4 flex-row items-center'>
      <Pressable
          onPress={() => router.dismiss()}
        >
          <Ionicons
            name="chevron-back"
            size={30}
            color='white'
            className='shadow mx-4'
          />
        </Pressable>
        <TextInput
          placeholder='Buscar... Ej.: Toy Story'
          className='border border-white p-4 rounded-md text-white placeholder:text-gray-400 flex-grow'
          autoFocus
          value={search}
          onChangeText={setSearch}
          onEndEditing={handleSearch}
          keyboardType='default'
        />
      </View>
        <View className='mt-5 mx-4 flex-1'>
          {
            searchQuery.isLoading && (
              <View className='justify-center items-center flex-1 flex-grow'>
                <ActivityIndicator size='large' color='white' />
              </View>
            )
          }
          {searchQuery.isSuccess &&
            (<>
              <Text className='font-bold text-2xl mb-4'>Mostrando resultados de '{search}':</Text>
              {/* <MainSlideShow movies={searchQuery.data ?? []} /> */}
              <MovieGrid movieList={searchQuery.data ?? []} />
            </>
            )}
        </View>
      </View>
    </ScrollView>
    </>
  )
}

export default SearchScreen