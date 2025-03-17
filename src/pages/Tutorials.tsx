
import { useState } from 'react';
import Banner from '@/components/layout/Banner';
import ContentGrid from '@/components/common/ContentGrid';
import ContentFilter from '@/components/filters/ContentFilter';

// Mock data for demonstration
const mockTutorials = Array(24).fill(null).map((_, index) => ({
  id: `tutorial-${index}`,
  title: `Tutorial ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2020 + (index % 4),
  category: ['Development', 'Design', 'Marketing', 'Business'][index % 4],
  language: ['English', 'Spanish', 'French', 'German'][index % 4]
}));

const Tutorials = () => {
  const [filteredTutorials, setFilteredTutorials] = useState(mockTutorials);
  
  const handleFilter = (filters: any) => {
    let results = [...mockTutorials];
    
    // Apply filters
    if (filters.search) {
      results = results.filter(tutorial => 
        tutorial.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.category) {
      results = results.filter(tutorial => tutorial.category === filters.category);
    }
    
    if (filters.language) {
      results = results.filter(tutorial => tutorial.language === filters.language);
    }
    
    if (filters.year) {
      results = results.filter(tutorial => tutorial.year.toString() === filters.year);
    }
    
    setFilteredTutorials(results);
  };
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Tutorials" 
        subtitle="Browse our collection of helpful tutorials on various topics" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <ContentFilter 
          type="tutorials"
          onFilter={handleFilter} 
          initialData={mockTutorials}
        />
        
        <div className="mt-8">
          <ContentGrid 
            title="All Tutorials" 
            type="tutorial" 
            items={filteredTutorials} 
            cols={6}
          />
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
