
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
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

  // Placeholder image if poster is not available
  const fallbackImage = '/placeholder.svg';

  return (
    <Link to={getLink()} className={cn('content-card group hover-scale block', className)}>
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
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Rating Badge - Show only for movie and tv */}
        {(type === 'movie' || type === 'tv') && rating && (
          <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-medium py-1 px-2 rounded-md flex items-center">
            <Star className="h-3 w-3 text-cine-rating mr-1 inline" />
            <span>{rating.toFixed(1)}</span>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="content-title">{title}</h3>
        
        <div className="content-meta">
          {/* Different metadata based on content type */}
          {type === 'movie' && (
            <>
              {year && <span>{year}</span>}
              {language && <span>{language}</span>}
              {contentType && <span className="text-cine-primary">{contentType}</span>}
              {genres && genres.length > 0 && <span>{genres[0]}</span>}
            </>
          )}
          
          {type === 'tv' && (
            <>
              {year && <span>{year}</span>}
              {language && <span>{language}</span>}
              {contentType && <span className="text-cine-primary">{contentType}</span>}
              {genres && genres.length > 0 && <span>{genres[0]}</span>}
            </>
          )}
          
          {type === 'tutorial' && (
            <>
              {category && <span>{category}</span>}
              {language && <span>{language}</span>}
              {contentType && <span className="text-cine-primary">{contentType}</span>}
            </>
          )}
          
          {type === 'documentary' && (
            <>
              {category && <span>{category}</span>}
              {year && <span>{year}</span>}
              {language && <span>{language}</span>}
              {contentType && <span className="text-cine-primary">{contentType}</span>}
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
