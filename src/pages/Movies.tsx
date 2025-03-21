
import { useState, useEffect } from 'react';
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
  
  const handleFilter = (filters: any) => {
    let results = [...mockMovies];
    
    // Apply filters
    if (filters.search) {
      results = results.filter(movie => 
        movie.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.genre) {
      results = results.filter(movie => movie.type === filters.genre);
    }
    
    if (filters.language) {
      results = results.filter(movie => movie.language === filters.language);
    }
    
    if (filters.year) {
      results = results.filter(movie => movie.year.toString() === filters.year);
    }
    
    // Apply selected filter type
    if (filters.selectedFilterType === 'top-rated') {
      results = results.sort((a, b) => b.rating - a.rating);
    } else if (filters.selectedFilterType === 'newly-released') {
      results = results.sort((a, b) => b.year - a.year);
    } else if (filters.selectedFilterType === 'trending') {
      // For demo, simulate trending with a mix of rating and randomness
      results = results.sort((a, b) => (b.rating * (Math.random() + 0.5)) - (a.rating * (Math.random() + 0.5)));
    }
    
    setFilteredMovies(results);
  };
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Movies" 
        subtitle="Browse our collection of high-quality movies available for download" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <ContentFilter 
          type="movies"
          onFilter={handleFilter} 
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
