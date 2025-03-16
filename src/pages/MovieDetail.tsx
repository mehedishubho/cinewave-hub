
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '@/components/layout/Banner';
import { Button } from '@/components/ui/button';
import { Star, Calendar, User, Film, Globe, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ContentGrid from '@/components/common/ContentGrid';

// Mock data for demonstration
const mockMovies = Array(6).fill(null).map((_, index) => ({
  id: `movie-${index}`,
  title: `Similar Movie ${index + 1}`,
  poster: '/placeholder.svg',
  year: 2023,
  type: 'Action',
  language: 'English',
  contentType: 'Movie',
  rating: 4.5
}));

// Mock movie details
const mockMovieDetails = {
  id: 'movie-1',
  title: 'The Dark Knight',
  poster: '/placeholder.svg',
  year: 2008,
  genres: ['Action', 'Crime', 'Drama'],
  language: 'English',
  rating: 9.0,
  duration: '152 min',
  director: 'Christopher Nolan',
  cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart', 'Michael Caine'],
  plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
  availableResolutions: ['480p', '720p', '1080p', '2K'],
  contentType: 'Movie'
};

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState(mockMovieDetails);
  
  // In a real app, you would fetch the movie data here
  useEffect(() => {
    // Fetch movie data based on id
    console.log(`Fetching movie with id: ${id}`);
    // Example API call: 
    // const fetchMovie = async () => {
    //   const response = await fetch(`/api/movies/${id}`);
    //   const data = await response.json();
    //   setMovie(data);
    // };
    // fetchMovie();
  }, [id]);
  
  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-cine-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="bg-background min-h-screen">
      <Banner title={movie.title} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Cover Image */}
          <div className="lg:col-span-1">
            <div className="aspect-[2/3] overflow-hidden rounded-lg shadow-md">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
            </div>
          </div>
          
          {/* Right Side - Movie Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{movie.title}</h1>
            
            <div className="flex flex-wrap gap-3 mb-6">
              {movie.genres?.map((genre, index) => (
                <span key={index} className="bg-cine-primary/10 text-cine-primary text-sm px-3 py-1 rounded-full">
                  {genre}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Star className="text-cine-rating h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{movie.rating}/10</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{movie.year}</p>
                  <p className="text-xs text-muted-foreground">Release Year</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Film className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{movie.contentType}</p>
                  <p className="text-xs text-muted-foreground">Content Type</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <User className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{movie.director}</p>
                  <p className="text-xs text-muted-foreground">Director</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Globe className="text-cine-primary h-5 w-5" />
                <div>
                  <p className="text-sm font-medium">{movie.language}</p>
                  <p className="text-xs text-muted-foreground">Language</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Synopsis</h3>
              <p className="text-muted-foreground">{movie.plot}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Cast</h3>
              <div className="flex flex-wrap gap-2">
                {movie.cast?.map((actor, index) => (
                  <span key={index} className="bg-muted text-sm px-3 py-1 rounded-full">
                    {actor}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Download</h3>
              <div className="flex flex-wrap gap-3">
                {movie.availableResolutions?.map((resolution, index) => (
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
            title="Similar Movies" 
            type="movie" 
            items={mockMovies} 
            viewAllLink="/movies" 
            cols={6}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
