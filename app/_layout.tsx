import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import React from 'react'
import './global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const queryClient = new QueryClient();

const RootLayout = () => {
  nowPlayingAction();
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default RootLayout