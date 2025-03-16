
import { useState } from 'react';
import Banner from '@/components/layout/Banner';
import ContentGrid from '@/components/common/ContentGrid';
import ContentFilter from '@/components/filters/ContentFilter';

// Mock data for demonstration
const mockDocumentaries = Array(24).fill(null).map((_, index) => ({
  id: `doc-${index}`,
  title: `Documentary ${index + 1}`,
  poster: '/placeholder.svg',
  category: ['Nature', 'History', 'Science', 'Society', 'Culture', 'Sport'][index % 6],
  year: 2015 + (index % 9),
  language: ['English', 'Spanish', 'French', 'German'][index % 4]
}));

const Documentary = () => {
  const [filteredDocumentaries, setFilteredDocumentaries] = useState(mockDocumentaries);
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Documentaries" 
        subtitle="Browse our collection of informative and educational documentaries" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <ContentFilter 
          type="documentary"
          onFilter={(filtered) => setFilteredDocumentaries(filtered as any)} 
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
