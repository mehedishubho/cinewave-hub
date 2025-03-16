
import { lazy } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Lazy load the HeroSlider component
const HeroSlider = lazy(() => import('@/components/home/HeroSlider'));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[650px] max-h-[850px] bg-gradient-to-r from-cine-dark to-cine-dark/90 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-slide-down">
              Welcome to Your Entertainment Hub
            </h1>
            <p className="text-white/80 text-lg mb-8 animate-slide-down animate-delay-100">
              Discover movies, TV series, tutorials and documentaries all in one place. Your ultimate entertainment destination.
            </p>
            <div className="flex space-x-4 animate-slide-down animate-delay-200">
              <Button asChild size="lg" className="bg-cine-primary hover:bg-cine-primary/90">
                <Link to="/movies">
                  Browse Movies
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/tv-series">
                  Explore TV Shows
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -right-32 top-1/4 w-96 h-96 bg-cine-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute -left-32 bottom-1/4 w-96 h-96 bg-cine-accent/20 rounded-full blur-[120px]"></div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20"></div>
      </section>
      
      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Featured Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of entertainment content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Movies Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md border border-border/30 hover:border-cine-primary/40 transition-colors group">
            <div className="h-40 bg-gradient-to-br from-cine-primary/80 to-cine-primary/30 flex items-center justify-center">
              <span className="text-5xl">🎬</span>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-2">Movies</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Explore our vast collection of movies from different genres
              </p>
              <Button asChild variant="outline" className="w-full group-hover:bg-cine-primary/10 group-hover:border-cine-primary/30">
                <Link to="/movies" className="flex items-center justify-center">
                  Browse Movies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* TV Series Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md border border-border/30 hover:border-cine-accent/40 transition-colors group">
            <div className="h-40 bg-gradient-to-br from-cine-accent/80 to-cine-accent/30 flex items-center justify-center">
              <span className="text-5xl">📺</span>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-2">TV Series</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Watch popular and exclusive TV series from around the world
              </p>
              <Button asChild variant="outline" className="w-full group-hover:bg-cine-accent/10 group-hover:border-cine-accent/30">
                <Link to="/tv-series" className="flex items-center justify-center">
                  Explore Shows
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Tutorials Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md border border-border/30 hover:border-cine-secondary/40 transition-colors group">
            <div className="h-40 bg-gradient-to-br from-cine-secondary/80 to-cine-secondary/30 flex items-center justify-center">
              <span className="text-5xl">🎓</span>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-2">Tutorials</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Learn new skills with our comprehensive tutorial collection
              </p>
              <Button asChild variant="outline" className="w-full group-hover:bg-cine-secondary/10 group-hover:border-cine-secondary/30">
                <Link to="/tutorials" className="flex items-center justify-center">
                  View Tutorials
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Documentaries Card */}
          <div className="bg-card rounded-lg overflow-hidden shadow-md border border-border/30 hover:border-cine-tertiary/40 transition-colors group">
            <div className="h-40 bg-gradient-to-br from-cine-tertiary/80 to-cine-tertiary/30 flex items-center justify-center">
              <span className="text-5xl">🌍</span>
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-2">Documentaries</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Discover fascinating documentaries about our world
              </p>
              <Button asChild variant="outline" className="w-full group-hover:bg-cine-tertiary/10 group-hover:border-cine-tertiary/30">
                <Link to="/documentary" className="flex items-center justify-center">
                  Watch Documentaries
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
