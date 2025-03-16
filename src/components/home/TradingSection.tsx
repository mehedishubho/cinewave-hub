
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContentCard from '@/components/common/ContentCard';

interface TradingSectionProps {
  items: any[];
}

const TradingSection = ({ items }: TradingSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-r from-cine-dark to-cine-dark/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-3">
              Trading Courses
            </h2>
            <p className="text-white/70 max-w-2xl">
              Learn from expert traders and improve your trading skills with our premium courses
            </p>
          </div>
          
          <Button variant="outline" asChild className="mt-4 md:mt-0 bg-transparent text-white border-cine-primary hover:bg-cine-primary/20 group">
            <Link to="/trading" className="flex items-center">
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {items.map((item, index) => (
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
