
import { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';

// Define props interface
interface ContentFilterProps {
  type: 'movies' | 'tv-series' | 'tutorials' | 'documentary';
  onFilter: (filters: any) => void;
  initialData: any[];
}

const ContentFilter = ({ type, onFilter, initialData }: ContentFilterProps) => {
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
    genre: '',
    language: '',
    category: '',
    year: undefined as Date | undefined,
    rating: 0,
    selectedFilterType: type === 'movies' || type === 'tv-series' ? 'newly-released' : '',
  });
  
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Handle filter changes
  const handleFilterChange = (key: string, value: any) => {
    setFilters({ ...filters, [key]: value });
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
  };
  
  return (
    <div className="filter-container w-full">
      <div className="flex justify-between items-center mb-4 w-full">
        <h2 className="font-medium text-lg">Filters</h2>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center gap-2 md:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {mobileFiltersOpen ? 'Hide Filters' : 'Show Filters'}
        </Button>
      </div>
      
      <form onSubmit={handleSubmit} className={cn(
        "space-y-6 w-full",
        mobileFiltersOpen ? 'block' : 'hidden md:block'
      )}>
        {/* Full width layout for all screen sizes */}
        <div className="grid grid-cols-1 gap-6 w-full">
          {/* Search Input */}
          <div className="w-full">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder={`Search ${type}...`}
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pr-10 w-full"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          {/* Type Selection (for movies/TV) */}
          {(type === 'movies' || type === 'tv-series') && (
            <div className="w-full">
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
          
          {/* Year Datepicker */}
          <div className="w-full">
            <h3 className="text-sm font-medium mb-3">Release Year</h3>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !filters.year && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {filters.year ? format(filters.year, 'yyyy') : <span>Select Year</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={filters.year}
                  onSelect={(date) => handleFilterChange('year', date)}
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                  captionLayout="dropdown-buttons"
                  initialFocus
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Languages Dropdown */}
          <div className="w-full">
            <h3 className="text-sm font-medium mb-3">Language</h3>
            <Select 
              onValueChange={(value) => handleFilterChange('language', value)}
              value={filters.language}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Genres/Categories Dropdown */}
          <div className="w-full">
            <h3 className="text-sm font-medium mb-3">
              {type === 'movies' || type === 'tv-series' ? 'Genre' : 'Category'}
            </h3>
            <Select 
              onValueChange={(value) => {
                if (type === 'movies' || type === 'tv-series') {
                  handleFilterChange('genre', value);
                } else {
                  handleFilterChange('category', value);
                }
              }}
              value={type === 'movies' || type === 'tv-series' ? filters.genre : filters.category}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={type === 'movies' || type === 'tv-series' ? "Select Genre" : "Select Category"} />
              </SelectTrigger>
              <SelectContent>
                {(type === 'movies' || type === 'tv-series' ? genreOptions : categoryOptions).map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Submit Button */}
          <div className="pt-2 w-full">
            <Button type="submit" className="w-full">Apply Filters</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContentFilter;
