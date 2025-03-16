
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '@/components/layout/Banner';
import { Button } from '@/components/ui/button';
import { Star, Calendar, User, Tv, Globe, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ContentGrid from '@/components/common/ContentGrid';

// Mock data for demonstration
const mockTvSeries = Array(6).fill(null).map((_, index) => ({
  id: `tv-${index}`,
  title: `Similar TV Series ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2023,
  type: 'Drama',
  language: 'English',
  contentType: 'TV Series',
  rating: 4.8
}));

// Mock TV series details
const mockTvSeriesDetails = {
  id: 'tv-1',
  title: 'Breaking Bad',
  poster: '/placeholder.svg',
  year: '2008-2013',
  genres: ['Crime', 'Drama', 'Thriller'],
  language: 'English',
  rating: 9.5,
  seasons: 5,
  episodes: 62,
  creator: 'Vince Gilligan',
  cast: ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn', 'Dean Norris'],
  plot: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
  availableResolutions: ['480p', '720p', '1080p'],
  contentType: 'TV Series'
};

const TvSeriesDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [tvSeries, setTvSeries] = useState(mockTvSeriesDetails);
  
  // In a real app, you would fetch the TV series data here
  useEffect(() => {
    // Fetch TV series data based on id
    console.log(`Fetching TV series with id: ${id}`);
    // Example API call: 
    // const fetchTvSeries = async () => {
    //   const response = await fetch(`/api/tv-series/${id}`);
    //   const data = await response.json();
    //   setTvSeries(data);
    // };
    // fetchTvSeries();
  }, [id]);
  
  if (!tvSeries) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cine-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="bg-background min-h-screen">
      <Banner title={tvSeries.title} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Cover Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[2/3] overflow-hidden rounded-lg shadow-md">
              <img 
                src={tvSeries.poster} 
                alt={tvSeries.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
            </div>
          </div>
          
          {/* Right Side - TV Series Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{tvSeries.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {tvSeries.genres?.map((genre, index) => (
                <span key={index} className="bg-cine-primary/10 text-cine-primary text-sm px-3 py-1 rounded-full">
                  {genre}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star className="text-cine-rating h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tvSeries.rating}/10</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tvSeries.year}</p>
                  <p className="text-xs text-muted-foreground">Release Years</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Tv className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tvSeries.contentType}</p>
                  <p className="text-xs text-muted-foreground">Content Type</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tvSeries.creator}</p>
                  <p className="text-xs text-muted-foreground">Creator</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Globe className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tvSeries.language}</p>
                  <p className="text-xs text-muted-foreground">Language</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Tv className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{tvSeries.seasons} Seasons, {tvSeries.episodes} Episodes</p>
                  <p className="text-xs text-muted-foreground">Episodes</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
              <p className="text-muted-foreground">{tvSeries.plot}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {tvSeries.cast?.map((actor, index) => (
                  <span key={index} className="bg-muted text-sm px-3 py-1 rounded-full">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Download</h3>
              <div className="flex flex-wrap gap-3">
                {tvSeries.availableResolutions?.map((resolution, index) => (
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
            title="Similar TV Series" 
            type="tv" 
            items={mockTvSeries} 
            viewAllLink="/tv-series" 
            cols={6}
          />
        </div>
      </div>
    </div>
  );
};

export default TvSeriesDetail;
