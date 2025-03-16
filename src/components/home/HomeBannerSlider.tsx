
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SlideProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const SLIDES: SlideProps[] = [
  {
    id: '1',
    title: 'Explore the Latest Blockbusters',
    description: 'Watch the most popular movies with stunning visuals and captivating storylines.',
    image: '/placeholder.svg',
    link: '/movies'
  },
  {
    id: '2',
    title: 'Binge-Worthy TV Series',
    description: 'Dive into thrilling television series from around the world.',
    image: '/placeholder.svg',
    link: '/tv-series'
  },
  {
    id: '3',
    title: 'Learn Something New Today',
    description: 'Expand your knowledge with our educational tutorials.',
    image: '/placeholder.svg',
    link: '/tutorials'
  },
  {
    id: '4',
    title: 'Fascinating Documentaries',
    description: 'Discover the truth behind fascinating real-world stories.',
    image: '/placeholder.svg',
    link: '/documentary'
  },
  {
    id: '5',
    title: 'Exclusive Content',
    description: 'Access exclusive content you won't find anywhere else.',
    image: '/placeholder.svg',
    link: '/movies'
  },
  {
    id: '6',
    title: 'Family Entertainment',
    description: 'Fun and educational content for the whole family.',
    image: '/placeholder.svg',
    link: '/movies'
  }
];

export const HomeBannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[85vh] min-h-[650px] max-h-[850px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full z-10">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute'
                }`}
              >
                {index === activeIndex && (
                  <>
                    <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-slide-down">
                      {slide.title}
                    </h1>
                    <p className="text-white/80 text-lg mb-8 animate-slide-down animate-delay-100">
                      {slide.description}
                    </p>
                    <div className="flex space-x-4 animate-slide-down animate-delay-200">
                      <Button asChild size="lg" className="bg-cine-primary hover:bg-cine-primary/90">
                        <Link to={slide.link}>
                          <Play className="mr-2 h-4 w-4" /> Watch Now
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                        <Link to="/movies">
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center space-x-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-cine-primary w-6' : 'bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {/* Bottom Cards Slider (6 items) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-20 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {SLIDES.map((slide, index) => (
              <Link 
                to={slide.link} 
                key={slide.id} 
                className={`relative rounded-lg overflow-hidden group transition-transform hover:scale-105 ${
                  index === activeIndex ? 'ring-2 ring-cine-primary' : ''
                }`}
              >
                <div 
                  className="aspect-[3/4] bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white font-semibold text-sm truncate">{slide.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerSlider;
