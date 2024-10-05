import { Movie } from '@/infrastructure/interfaces/movie.interface';
import { useRef } from 'react';
import { useWindowDimensions, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';

interface MainSlideShowProps {
  movies: Movie[];
}

const MainSlideShow = ({movies}: MainSlideShowProps) => {

  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className='h-[250px] w-full mb-4'>
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => <MoviePoster {...item} />}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        autoPlay
        autoPlayInterval={5000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        defaultIndex={1}
      />
    </View>
  )
}

export default MainSlideShow