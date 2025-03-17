
import { useState } from 'react';
import Banner from '@/components/layout/Banner';
import ContentGrid from '@/components/common/ContentGrid';
import ContentFilter from '@/components/filters/ContentFilter';

// Mock data for demonstration
const mockTvSeries = Array(24).fill(null).map((_, index) => ({
  id: `tv-${index}`,
  title: `TV Series ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2018 + (index % 6),
  type: ['Drama', 'Comedy', 'Sci-Fi', 'Fantasy', 'Horror', 'Documentary'][index % 6],
  language: ['English', 'Spanish', 'Korean', 'Japanese'][index % 4],
  rating: (3 + (index % 3)) + (Math.random() * 0.9)
}));

const TvSeries = () => {
  const [filteredTvSeries, setFilteredTvSeries] = useState(mockTvSeries);
  
  const handleFilter = (filters: any) => {
    let results = [...mockTvSeries];
    
    // Apply filters
    if (filters.search) {
      results = results.filter(series => 
        series.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.genre) {
      results = results.filter(series => series.type === filters.genre);
    }
    
    if (filters.language) {
      results = results.filter(series => series.language === filters.language);
    }
    
    if (filters.year) {
      results = results.filter(series => series.year.toString() === filters.year);
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
    
    setFilteredTvSeries(results);
  };
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="TV Series" 
        subtitle="Browse our collection of high-quality TV series available for download" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <ContentFilter 
          type="tv-series"
          onFilter={handleFilter} 
          initialData={mockTvSeries}
        />
        
        <div className="mt-8">
          <ContentGrid 
            title="All TV Series" 
            type="tv" 
            items={filteredTvSeries} 
            cols={6}
          />
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
