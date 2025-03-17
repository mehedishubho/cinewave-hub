
import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  
  // Generate year options from 1900 to current year
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
  
  // State for filters
  const [filters, setFilters] = useState({
    search: '',
    genre: '',
    language: '',
    category: '',
    year: '',
    rating: 0,
    selectedFilterType: type === 'movies' || type === 'tv-series' ? 'newly-released' : '',
  });
  
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
    <div className="w-full bg-background border border-border rounded-md p-6">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* Search Input */}
          <div className="md:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-foreground mb-2">
              {type === 'movies' ? 'Find Movies' : 
               type === 'tv-series' ? 'Find TV Series' : 
               type === 'tutorials' ? 'Find Tutorials' : 'Find Documentaries'}
            </label>
            <div className="relative w-full">
              <Input
                id="search"
                type="text"
                placeholder={`Search ${type}...`}
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pr-10"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          {/* Type/Category Selection */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              {type === 'movies' || type === 'tv-series' ? 'Genre' : 'Category'}
            </label>
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
                <SelectValue placeholder={type === 'movies' || type === 'tv-series' ? "Genre" : "Category"} />
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
          
          {/* Languages Dropdown */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Language
            </label>
            <Select 
              onValueChange={(value) => handleFilterChange('language', value)}
              value={filters.language}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Language" />
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
          
          {/* Year Dropdown */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Release Year
            </label>
            <Select 
              onValueChange={(value) => handleFilterChange('year', value)}
              value={filters.year}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                {yearOptions.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Submit Button */}
          <div>
            <Button type="submit" className="w-full">
              Search
            </Button>
          </div>
        </div>

        {/* Content Type Pills - only for movies/TV */}
        {(type === 'movies' || type === 'tv-series') && (
          <div className="mt-6">
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
      </form>
    </div>
  );
};

export default ContentFilter;
