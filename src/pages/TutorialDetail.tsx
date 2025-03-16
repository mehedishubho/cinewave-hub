
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '@/components/layout/Banner';
import { Button } from '@/components/ui/button';
import { Star, Calendar, User, Video, Globe, Download, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ContentGrid from '@/components/common/ContentGrid';

// Mock data for demonstration
const mockTutorials = Array(6).fill(null).map((_, index) => ({
  id: `tutorial-${index}`,
  title: `Similar Tutorial ${index + 1}`,
  poster: '/placeholder.svg',
  category: 'Development',
  type: 'Video',
  language: 'English',
  contentType: 'Tutorial'
}));

// Mock tutorial details
const mockTutorialDetails = {
  id: 'tutorial-1',
  title: 'Complete React Developer Course',
  poster: '/placeholder.svg',
  year: 2023,
  categories: ['Web Development', 'Frontend', 'JavaScript'],
  language: 'English',
  rating: 4.9,
  duration: '18 hours',
  instructor: 'John Doe',
  level: 'Intermediate',
  description: 'Learn React from scratch and build powerful web applications. This comprehensive course covers everything from the basics to advanced concepts like hooks, context API, and Redux.',
  availableResolutions: ['480p', '720p', '1080p'],
  contentType: 'Tutorial'
};

const TutorialDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [tutorial, setTutorial] = useState(mockTutorialDetails);
  
  // In a real app, you would fetch the tutorial data here
  useEffect(() => {
    // Fetch tutorial data based on id
    console.log(`Fetching tutorial with id: ${id}`);
    // Example API call: 
    // const fetchTutorial = async () => {
    //   const response = await fetch(`/api/tutorials/${id}`);
    //   const data = await response.json();
    //   setTutorial(data);
    // };
    // fetchTutorial();
  }, [id]);
  
  if (!tutorial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cine-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="bg-background min-h-screen">
      <Banner title={tutorial.title} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Cover Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[2/3] overflow-hidden rounded-lg shadow-md">
              <img 
                src={tutorial.poster} 
                alt={tutorial.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
            </div>
          </div>
          
          {/* Right Side - Tutorial Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{tutorial.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {tutorial.categories?.map((category, index) => (
                <span key={index} className="bg-cine-primary/10 text-cine-primary text-sm px-3 py-1 rounded-full">
                  {category}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star className="text-cine-rating h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tutorial.rating}/5</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tutorial.year}</p>
                  <p className="text-xs text-muted-foreground">Released</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tutorial.duration}</p>
                  <p className="text-xs text-muted-foreground">Duration</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tutorial.instructor}</p>
                  <p className="text-xs text-muted-foreground">Instructor</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Globe className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tutorial.language}</p>
                  <p className="text-xs text-muted-foreground">Language</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Video className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tutorial.contentType}</p>
                  <p className="text-xs text-muted-foreground">Content Type</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{tutorial.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Download</h3>
              <div className="flex flex-wrap gap-3">
                {tutorial.availableResolutions?.map((resolution, index) => (
                  <Button 
                    key={index} 
                    className="bg-cine-primary hover:bg-cine-primary/90"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download {resolution}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <ContentGrid 
            title="Similar Tutorials" 
            type="tutorial" 
            items={mockTutorials} 
            viewAllLink="/tutorials" 
            cols={6}
          />
        </div>
      </div>
    </div>
  );
};

export default TutorialDetail;
