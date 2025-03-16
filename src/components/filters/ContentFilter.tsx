
import { useState } from 'react';
import { Search, SlidersHorizontal, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

// Define props interface
interface ContentFilterProps {
  type: 'movies' | 'tv-series' | 'tutorials' | 'documentary';
  onFilter: (filters: any) => void;
}

const ContentFilter = ({ type, onFilter }: ContentFilterProps) => {
  // Sample filter options - in a real app, these would come from your backend
  const genreOptions = [
    'Action', 'Adventure', 'Animation', 'Comedy', 
    'Crime', 'Documentary', 'Drama', 'Fantasy',
    'Horror', 'Sci-Fi', 'Thriller'
  ];
  
  const languageOptions = ['English', 'Hindi', 'Bangla', 'Spanish', 'French', 'Japanese', 'Korean'];
  
  // For tutorials/documentary
  const categoryOptions = [
    'Technology', 'Design', 'Programming', 'Business',
    'Marketing', 'Health', 'Science', 'History',
    'Nature', 'Biography', 'Social Issues'
  ];
  
  // State for filters
  const [filters, setFilters] = useState({
    search: '',
    genres: [] as string[],
    languages: [] as string[],
    categories: [] as string[],
    yearFrom: 2000,
    yearTo: new Date().getFullYear(),
    rating: 0,
    selectedFilterType: type === 'movies' || type === 'tv-series' ? 'newly-released' : '',
  });
  
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Handle filter changes
  const handleFilterChange = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
  };
  
  // Toggle selection in arrays (genres, languages, categories)
  const toggleArraySelection = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };
  
  return (
    <div className="filter-container">
      <div className="md:hidden flex justify-between items-center mb-4">
        <h2 className="font-medium text-lg">Filters</h2>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center gap-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>
      
      <form onSubmit={handleSubmit} className={cn(
        "space-y-6",
        mobileFiltersOpen ? 'block' : 'hidden md:block'
      )}>
        {/* Search Input */}
        <div>
          <div className="relative">
            <Input
              type="text"
              placeholder={`Search ${type}...`}
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        {/* Type Selection (for movies/TV) */}
        {(type === 'movies' || type === 'tv-series') && (
          <div>
            <h3 className="text-sm font-medium mb-3">Type</h3>
            <div className="flex flex-wrap gap-2">
              {['newly-released', 'top-rated', 'trending'].map((filterType) => (
                <button
                  key={filterType}
                  type="button"
                  className={cn(
                    "px-3 py-1.5 text-xs font-medium rounded-full border transition-colors",
                    filters.selectedFilterType === filterType
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent border-border hover:bg-muted"
                  )}
                  onClick={() => handleFilterChange('selectedFilterType', filterType)}
                >
                  {filterType.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Year Range */}
        <div>
          <div className="flex justify-between mb-3">
            <h3 className="text-sm font-medium">Year Range</h3>
            <span className="text-xs text-muted-foreground">
              {filters.yearFrom} - {filters.yearTo}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Input
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              value={filters.yearFrom}
              onChange={(e) => handleFilterChange('yearFrom', parseInt(e.target.value))}
              placeholder="From Year"
              className="w-full"
            />
            <Input
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              value={filters.yearTo}
              onChange={(e) => handleFilterChange('yearTo', parseInt(e.target.value))}
              placeholder="To Year"
              className="w-full"
            />
          </div>
        </div>
        
        {/* Minimum Rating Slider */}
        {(type === 'movies' || type === 'tv-series') && (
          <div>
            <div className="flex justify-between mb-3">
              <h3 className="text-sm font-medium">Minimum Rating</h3>
              <span className="text-xs text-muted-foreground">{filters.rating}/10</span>
            </div>
            <Slider
              value={[filters.rating]}
              min={0}
              max={10}
              step={0.5}
              onValueChange={(value) => handleFilterChange('rating', value[0])}
              className="py-2"
            />
          </div>
        )}
        
        {/* Languages */}
        <div>
          <h3 className="text-sm font-medium mb-3">Language</h3>
          <div className="flex flex-wrap gap-2">
            {languageOptions.map((language) => (
              <button
                key={language}
                type="button"
                className={cn(
                  "px-3 py-1.5 text-xs font-medium rounded-full border transition-colors flex items-center gap-1.5",
                  filters.languages.includes(language)
                    ? "bg-primary/10 text-primary border-primary"
                    : "bg-transparent border-border hover:bg-muted"
                )}
                onClick={() => handleFilterChange(
                  'languages',
                  toggleArraySelection(filters.languages, language)
                )}
              >
                {filters.languages.includes(language) && (
                  <Check className="h-3 w-3" />
                )}
                {language}
              </button>
            ))}
          </div>
        </div>
        
        {/* Genres for Movies/TV or Categories for Tutorials/Documentary */}
        <div>
          <h3 className="text-sm font-medium mb-3">
            {type === 'movies' || type === 'tv-series' ? 'Genre' : 'Category'}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {(type === 'movies' || type === 'tv-series' ? genreOptions : categoryOptions).map((item) => (
              <button
                key={item}
                type="button"
                className={cn(
                  "px-3 py-2 text-xs font-medium rounded-md border transition-colors text-left flex items-center gap-1.5",
                  (type === 'movies' || type === 'tv-series')
                    ? (filters.genres.includes(item) 
                      ? "bg-primary/10 text-primary border-primary" 
                      : "bg-transparent border-border hover:bg-muted")
                    : (filters.categories.includes(item) 
                      ? "bg-primary/10 text-primary border-primary" 
                      : "bg-transparent border-border hover:bg-muted")
                )}
                onClick={() => {
                  if (type === 'movies' || type === 'tv-series') {
                    handleFilterChange('genres', toggleArraySelection(filters.genres, item));
                  } else {
                    handleFilterChange('categories', toggleArraySelection(filters.categories, item));
                  }
                }}
              >
                {((type === 'movies' || type === 'tv-series') ? filters.genres.includes(item) : filters.categories.includes(item)) && (
                  <Check className="h-3 w-3 shrink-0" />
                )}
                <span className="truncate">{item}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="pt-2">
          <Button type="submit" className="w-full">Apply Filters</Button>
        </div>
      </form>
    </div>
  );
};

export default ContentFilter;
