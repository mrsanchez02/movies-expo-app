import './global.css'
import { View, Text } from 'react-native'
import React from 'react'
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'

const queryClient = new QueryClient();

const RootLayout = () => {
  nowPlayingAction();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </QueryClientProvider>
  )
}

export default RootLayout