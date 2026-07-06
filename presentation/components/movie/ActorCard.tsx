import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Cast } from '@/infrastructure/interfaces/cast.interface';

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View className="mx-10 w-[100px]">
      <View className="relative w-[100px] h-[150px]">
        {isLoading && (
          <View className="absolute inset-0 z-10 items-center justify-center rounded-2xl bg-black/20">
            <ActivityIndicator color="white" />
          </View>
        )}

        <Image
          source={{ uri: actor.avatar }}
          className={`w-[100px] h-[150px] ${isLoading ? '' : 'shadow rounded-2xl'}`}
          resizeMode="cover"
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
        />
      </View>

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="font-bold text-lg"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-600 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};
