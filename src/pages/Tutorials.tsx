
import { useState } from 'react';
import Banner from '@/components/layout/Banner';
import ContentGrid from '@/components/common/ContentGrid';
import ContentFilter from '@/components/filters/ContentFilter';

// Mock data for demonstration
const mockTutorials = Array(24).fill(null).map((_, index) => ({
  id: `tutorial-${index}`,
  title: `Tutorial ${index + 1}`,
  poster: '/placeholder.svg',
  category: ['Development', 'Design', 'Marketing', 'Business'][index % 4],
  type: ['Video', 'Text', 'Interactive', 'Course'][index % 4],
  language: ['English', 'Spanish', 'French', 'German'][index % 4]
}));

const Tutorials = () => {
  const [filteredTutorials, setFilteredTutorials] = useState(mockTutorials);
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Tutorials" 
        subtitle="Browse our collection of helpful tutorials on various topics" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <ContentFilter 
          type="tutorial"
          onFilterChange={(filtered) => setFilteredTutorials(filtered as any)} 
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
