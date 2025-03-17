
import { Link } from 'react-router-dom';
import { Star, Calendar, Film, Tv, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContentCardProps {
  id: number | string;
  type: 'movie' | 'tv' | 'tutorial' | 'documentary';
  title: string;
  poster: string;
  year?: string | number;
  rating?: number;
  language?: string;
  contentType?: string;
  category?: string;
  genres?: string[];
  className?: string;
}

const ContentCard = ({
  id,
  type,
  title,
  poster,
  year,
  rating,
  language,
  contentType,
  category,
  genres,
  className
}: ContentCardProps) => {
  // Determine the link based on the content type
  const getLink = () => {
    switch (type) {
      case 'movie':
        return `/movies/${id}`;
      case 'tv':
        return `/tv-series/${id}`;
      case 'tutorial':
        return `/tutorials/${id}`;
      case 'documentary':
        return `/documentary/${id}`;
      default:
        return '#';
    }
  };

  // Get the appropriate icon based on content type
  const getTypeIcon = () => {
    switch (type) {
      case 'movie':
        return <Film className="h-3.5 w-3.5 mr-1" />;
      case 'tv':
        return <Tv className="h-3.5 w-3.5 mr-1" />;
      case 'tutorial':
      case 'documentary':
        return <BookOpen className="h-3.5 w-3.5 mr-1" />;
      default:
        return null;
    }
  };

  // Placeholder image if poster is not available
  const fallbackImage = '/placeholder.svg';

  return (
    <Link to={getLink()} className={cn('content-card group block relative rounded-lg overflow-hidden', className)}>
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={poster || fallbackImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = fallbackImage;
          }}
        />
        
        {/* Rating Badge - Show for any content with rating */}
        {rating && (
          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-medium py-1 px-2 rounded-md flex items-center">
            <Star className="h-3 w-3 text-yellow-400 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
      
      {/* Card Info with gradient background */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-3 pt-8">
        <h3 className="text-white font-medium text-sm md:text-base line-clamp-1">{title}</h3>
        
        <div className="flex flex-wrap items-center gap-x-3 mt-1 text-white/80 text-xs">
          {/* Year with calendar icon */}
          {year && (
            <span className="flex items-center">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              {year}
            </span>
          )}
          
          {/* Content type or genre with appropriate icon */}
          {(contentType || (genres && genres.length > 0)) && (
            <span className="flex items-center text-white/80">
              {getTypeIcon()}
              {contentType || (genres && genres[0])}
            </span>
          )}
          
          {/* Display language only if we have space */}
          {language && !(contentType && year) && (
            <span className="text-white/70 hidden sm:inline-block">
              {language}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
