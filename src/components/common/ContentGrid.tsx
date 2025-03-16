
import { Link } from 'react-router-dom';
import ContentCard from './ContentCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ContentGridProps {
  title: string;
  type: 'movie' | 'tv' | 'tutorial' | 'documentary' | 'blog';
  items: any[];
  viewAllLink?: string;
  className?: string;
  cols?: number;
}

const ContentGrid = ({
  title,
  type,
  items,
  viewAllLink,
  className = '',
  cols = 6
}: ContentGridProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={`section-container ${className}`}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-heading">{title}</h2>
        
        {viewAllLink && (
          <Button variant="ghost" asChild className="group">
            <Link to={viewAllLink} className="flex items-center text-sm font-medium hover:text-cine-primary">
              View All
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        )}
      </div>
      
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-${cols} gap-4 md:gap-6`}>
        {items.map((item, index) => (
          <ContentCard
            key={item.id}
            {...item}
            type={type === 'blog' ? 'movie' : type}
            className={`animate-slide-up animate-delay-${Math.min(index * 100, 500)}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentGrid;
