
import { useState } from 'react';
import Banner from '@/components/layout/Banner';
import ContentGrid from '@/components/common/ContentGrid';
import ContentFilter from '@/components/filters/ContentFilter';

// Mock data for demonstration
const mockDocumentaries = Array(24).fill(null).map((_, index) => ({
  id: `doc-${index}`,
  title: `Documentary ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2015 + (index % 9),
  category: ['Nature', 'History', 'Science', 'Society', 'Culture', 'Sport'][index % 6],
  language: ['English', 'Spanish', 'French', 'German'][index % 4]
}));

const Documentary = () => {
  const [filteredDocumentaries, setFilteredDocumentaries] = useState(mockDocumentaries);
  
  const handleFilter = (filters: any) => {
    let results = [...mockDocumentaries];
    
    // Apply filters
    if (filters.search) {
      results = results.filter(doc => 
        doc.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    if (filters.category) {
      results = results.filter(doc => doc.category === filters.category);
    }
    
    if (filters.language) {
      results = results.filter(doc => doc.language === filters.language);
    }
    
    if (filters.year) {
      results = results.filter(doc => doc.year.toString() === filters.year);
    }
    
    setFilteredDocumentaries(results);
  };
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Documentaries" 
        subtitle="Browse our collection of informative and educational documentaries" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <ContentFilter 
          type="documentary"
          onFilter={handleFilter} 
          initialData={mockDocumentaries}
        />
        
        <div className="mt-8">
          <ContentGrid 
            title="All Documentaries" 
            type="documentary" 
            items={filteredDocumentaries} 
            cols={6}
          />
        </div>
      </div>
    </div>
  );
};

export default Documentary;
