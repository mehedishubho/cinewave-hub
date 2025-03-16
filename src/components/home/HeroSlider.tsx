
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Sample data for slider
const sliderData = [
  {
    id: 1,
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80',
    rating: 8.2,
    year: 2024,
    duration: '166 min',
    type: 'movie',
    link: '/movies/dune-part-two',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    rating: 8.4,
    year: 2023,
    duration: '180 min',
    type: 'movie',
    link: '/movies/oppenheimer',
  },
  {
    id: 3,
    title: 'House of the Dragon',
    description: 'The story of the House Targaryen set 200 years before the events of Game of Thrones.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80',
    rating: 8.5,
    year: 2022,
    duration: 'TV Series',
    type: 'tv',
    link: '/tv-series/house-of-the-dragon',
  },
  {
    id: 4,
    title: 'The Batman',
    description: 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate.',
    image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    rating: 7.8,
    year: 2022,
    duration: '176 min',
    type: 'movie',
    link: '/movies/the-batman',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Auto slide
  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-[80vh] min-h-[600px] max-h-[800px] overflow-hidden">
      {/* Background Images */}
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                'max-w-3xl transition-all duration-500',
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              )}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded">
                  {slide.type === 'movie' ? 'Movie' : 'TV Series'}
                </span>
                <div className="flex items-center text-cine-rating">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-white text-sm">{slide.rating.toFixed(1)}</span>
                </div>
                <span className="text-white/80 text-sm">{slide.year}</span>
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="w-3.5 h-3.5 mr-1" />
                  <span>{slide.duration}</span>
                </div>
              </div>
              
              <h2 className="text-white font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-shadow">
                {slide.title}
              </h2>
              
              <p className="text-white/90 mb-6 max-w-xl text-shadow">
                {slide.description}
              </p>
              
              <div className="flex space-x-4">
                <Button asChild size="lg" className="bg-cine-primary hover:bg-cine-primary/90">
                  <Link to={slide.link}>
                    Watch Now
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Link to={slide.link}>
                    Details
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-3 h-3 rounded-full transition-all',
              index === currentSlide 
                ? 'bg-primary w-8'
                : 'bg-white/40 hover:bg-white/70'
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        onClick={goToPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
        onClick={goToNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20"></div>
    </div>
  );
};

export default HeroSlider;
