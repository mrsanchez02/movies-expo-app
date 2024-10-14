import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import React from 'react'
import './global.css'

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