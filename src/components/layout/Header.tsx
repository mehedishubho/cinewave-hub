
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Film, Tv, Video, BookOpen, FileText, Send, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState('movies');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilterOpen, setSearchFilterOpen] = useState(false);
  
  const location = useLocation();
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'Movies', path: '/movies', icon: Film },
    { name: 'TV Series', path: '/tv-series', icon: Tv },
    { name: 'Tutorials', path: '/tutorials', icon: Video },
    { name: 'Documentary', path: '/documentary', icon: BookOpen },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Request', path: '/request', icon: Send },
    { name: 'Contact Us', path: '/contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (searchOpen) setSearchOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the search submission
    console.log(`Searching for ${searchTerm} in ${searchFilter}`);
    // Placeholder for search logic
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-cine-primary to-cine-secondary">
            CineWave
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSearch}
            className={cn('ml-2', searchOpen && 'text-primary')}
          >
            <Search className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center md:hidden gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSearch}
            className={cn(searchOpen && 'text-primary')}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 p-4 bg-background/95 backdrop-blur-md border-b border-border animate-slide-down shadow-md">
            <div className="max-w-3xl mx-auto">
              <form onSubmit={handleSearchSubmit} className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder={`Search for ${searchFilter}...`}
                      className="w-full pr-24"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs font-normal"
                        onClick={() => setSearchFilterOpen(!searchFilterOpen)}
                      >
                        {searchFilter} <ChevronDown className="ml-1 h-3 w-3" />
                      </Button>
                      
                      {searchFilterOpen && (
                        <div className="absolute right-0 top-full mt-1 bg-card rounded-md shadow-md border border-border py-1 z-50 w-36">
                          {['movies', 'tv series', 'tutorials', 'documentary', 'blog'].map((filter) => (
                            <button
                              key={filter}
                              type="button"
                              className="block w-full text-left px-3 py-1.5 text-sm hover:bg-muted"
                              onClick={() => {
                                setSearchFilter(filter);
                                setSearchFilterOpen(false);
                              }}
                            >
                              {filter}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <Button type="submit" className="shrink-0">
                    Search
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  <div className="text-sm font-medium">Filters:</div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Genre: All
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Year: Any
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Rating: Any
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Language: All
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[68px] bg-background z-40 animate-fade-in">
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'px-4 py-3 flex items-center gap-3 rounded-md text-base font-medium transition-colors',
                    location.pathname === item.path
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-muted'
                  )}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
