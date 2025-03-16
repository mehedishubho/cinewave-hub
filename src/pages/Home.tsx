
import { lazy } from 'react';
import Banner from '@/components/layout/Banner';
import ContentGrid from '@/components/common/ContentGrid';

// Mock data for demonstration
const mockMovies = Array(12).fill(null).map((_, index) => ({
  id: `movie-${index}`,
  title: `Movie Title ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2023,
  type: 'Action',
  language: 'English',
  rating: 4.5
}));

const mockTvSeries = Array(12).fill(null).map((_, index) => ({
  id: `tv-${index}`,
  title: `TV Series ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2023,
  type: 'Drama',
  language: 'English',
  rating: 4.8
}));

const mockTutorials = Array(12).fill(null).map((_, index) => ({
  id: `tutorial-${index}`,
  title: `Tutorial ${index + 1}`,
  poster: '/placeholder.svg',
  category: 'Development',
  type: 'Video',
  language: 'English'
}));

const mockDocumentaries = Array(12).fill(null).map((_, index) => ({
  id: `doc-${index}`,
  title: `Documentary ${index + 1}`,
  poster: '/placeholder.svg',
  category: 'Nature',
  year: 2023,
  language: 'English'
}));

// Lazy load the HeroSlider component
const HeroSlider = lazy(() => import('@/components/home/HeroSlider'));

const Home = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Slider Section */}
      <HeroSlider />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Latest Movies */}
        <ContentGrid 
          title="Latest Movies" 
          type="movie" 
          items={mockMovies} 
          viewAllLink="/movies" 
        />
        
        {/* Latest TV Series */}
        <ContentGrid 
          title="Latest TV Series" 
          type="tv" 
          items={mockTvSeries} 
          viewAllLink="/tv-series" 
        />
        
        {/* Latest Tutorials */}
        <ContentGrid 
          title="Latest Tutorials" 
          type="tutorial" 
          items={mockTutorials} 
          viewAllLink="/tutorials" 
        />
        
        {/* Latest Documentaries */}
        <ContentGrid 
          title="Latest Documentaries" 
          type="documentary" 
          items={mockDocumentaries} 
          viewAllLink="/documentary" 
        />
      </div>
    </div>
  );
};

export default Home;
