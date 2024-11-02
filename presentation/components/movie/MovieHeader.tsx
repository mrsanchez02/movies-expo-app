import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({originalTitle, poster, title}: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={[0, 0]}
        style={{
          height: screenHeight * 0.4,
          position: 'absolute',
          width: '100%',
          zIndex: 1,
        }}
      />
      {/* Back btn */}
      <View style={{
        position: 'absolute',
        top: 40,
        left: 10,
        zIndex: 99,
        elevation: 9
      }}>
        <Pressable
          onPress={() => router.dismiss()}
        >
          <Ionicons 
            name="chevron-back" 
            size={30} 
            color='white'
            className='shadow'
            />
        </Pressable>
      </View>
      <View
        style={{height: screenHeight * 0.7}}
        className='shadow-xl shadow-black/20'>
          <View className='flex-1 rounded-b-[25px] overflow-hidden'>
            <Image
              source={{ uri: poster }}
              resizeMode='cover'
              className='flex-1'
            />
          </View>
      </View>
      <View className='px-5 mt-5'>
        <Text className='font-normal text-gray-500'>{originalTitle}</Text>
        <Text className='font-semibold text-2xl'>{title}</Text>
      </View>
    </>
  )
}

export default MovieHeader