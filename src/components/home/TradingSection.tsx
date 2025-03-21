
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContentCard from '@/components/common/ContentCard';
import { useIsMobile } from '@/hooks/use-mobile';

interface TradingSectionProps {
  items: {
    id: string;
    title: string;
    poster: string;
    category?: string;
    instructor?: string;
    language: string;
    contentType: string;
    rating?: number;
    year?: number;
    type?: string;
  }[];
}

const TradingSection = ({ items }: TradingSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
              Trending
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {items.slice(0, isMobile ? 6 : 12).map((item, index) => (
            <ContentCard
              key={item.id}
              {...item}
              type="tutorial"
              className={`animate-slide-up animate-delay-${Math.min(index * 100, 500)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
