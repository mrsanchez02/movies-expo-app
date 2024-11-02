import { View, Text } from 'react-native'
import React from 'react'
import { ActorCard } from './ActorCard';
import { FlatList } from 'react-native-gesture-handler';
import { Cast } from '@/infrastructure/interfaces/cast.interface';

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className='mt-5 mb-20'>
      <Text className='font-bold text-2xl px-5 mb-2'>Actores</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ActorCard actor={item} />}
      />
    </View>
    )
}

export default MovieCast