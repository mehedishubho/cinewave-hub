
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
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="TV Series" 
        subtitle="Browse our collection of high-quality TV series available for download" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <ContentFilter 
          type="tv"
          onFilterChange={(filtered) => setFilteredTvSeries(filtered as any)} 
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
