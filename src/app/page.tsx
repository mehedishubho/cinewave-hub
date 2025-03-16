
import { lazy, useEffect } from 'react';
import ContentGrid from '@/components/common/ContentGrid';
import TradingSection from '@/components/home/TradingSection';
import HomeBannerSlider from '@/components/home/HomeBannerSlider';
import { generateMetadata } from '@/lib/metadata';
import { simulateFetch } from '@/lib/metadata';

// This would be a server component in Next.js 15
export const getStaticProps = async () => {
  try {
    // In Next.js 15, this would be server-side code
    const movies = await simulateFetch('movie', 12);
    const tvSeries = await simulateFetch('tv', 12);
    const tutorials = await simulateFetch('tutorial', 12);
    const documentaries = await simulateFetch('documentary', 12);
    const trending = await simulateFetch('trending', 12);
    
    return {
      props: {
        movies,
        tvSeries,
        tutorials,
        documentaries,
        trending
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        movies: [],
        tvSeries: [],
        tutorials: [],
        documentaries: [],
        trending: []
      }
    };
  }
};

// This would be metadata in Next.js 15
export const metadata = generateMetadata({
  title: 'Home | Your Entertainment Hub',
  description: 'Discover movies, TV series, tutorials and documentaries all in one place. Your ultimate entertainment destination.',
  keywords: ["movies", "tv series", "tutorials", "documentaries", "entertainment"],
});

// Mock data for demonstration - in Next.js 15 this would come from getStaticProps or getServerSideProps
const mockMovies = Array(12).fill(null).map((_, index) => ({
  id: `movie-${index}`,
  title: `Movie Title ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2023,
  type: 'Action',
  language: 'English',
  contentType: 'Movie',
  rating: 4.5
}));

const mockTvSeries = Array(12).fill(null).map((_, index) => ({
  id: `tv-${index}`,
  title: `TV Series ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2023,
  type: 'Drama',
  language: 'English',
  contentType: 'TV Series',
  rating: 4.8
}));

const mockTutorials = Array(12).fill(null).map((_, index) => ({
  id: `tutorial-${index}`,
  title: `Tutorial ${index + 1}`,
  poster: '/placeholder.svg',
  category: 'Development',
  type: 'Video',
  language: 'English',
  contentType: 'Tutorial'
}));

const mockDocumentaries = Array(12).fill(null).map((_, index) => ({
  id: `doc-${index}`,
  title: `Documentary ${index + 1}`,
  poster: '/placeholder.svg',
  category: 'Nature',
  year: 2023,
  language: 'English',
  contentType: 'Documentary'
}));

const mockTrading = Array(12).fill(null).map((_, index) => ({
  id: `trading-${index}`,
  title: `Trending Item ${index + 1}`,
  poster: '/placeholder.svg',
  category: 'Finance',
  instructor: `Instructor ${index + 1}`,
  language: 'English',
  contentType: 'Trending',
  rating: 4.9
}));

export default function Home() {
  // Simulate Next.js-like data loading
  useEffect(() => {
    // This would be replaced with actual data fetching in Next.js
    console.log('Simulating Next.js data loading');
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Banner Slider with 6 Cards */}
      <HomeBannerSlider />
      
      {/* Trading Section */}
      <div className="max-w-[1400px] mx-auto">
        <TradingSection items={mockTrading} />
      </div>
      
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-12 space-y-16">
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
}
