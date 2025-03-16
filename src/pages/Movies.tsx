
import { useState } from 'react';
import Banner from '@/components/layout/Banner';
import ContentGrid from '@/components/common/ContentGrid';
import ContentFilter from '@/components/filters/ContentFilter';

// Mock data for demonstration
const mockMovies = Array(24).fill(null).map((_, index) => ({
  id: `movie-${index}`,
  title: `Movie Title ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2020 + (index % 4),
  type: ['Action', 'Comedy', 'Drama', 'Thriller'][index % 4],
  language: ['English', 'Spanish', 'French', 'Korean'][index % 4],
  rating: (3 + (index % 3)) + (Math.random() * 0.9)
}));

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState(mockMovies);
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Movies" 
        subtitle="Browse our collection of high-quality movies available for download" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <ContentFilter 
          type="movie"
          onFilterChange={(filtered) => setFilteredMovies(filtered as any)} 
          initialData={mockMovies}
        />
        
        <div className="mt-8">
          <ContentGrid 
            title="All Movies" 
            type="movie" 
            items={filteredMovies} 
            cols={6}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;
