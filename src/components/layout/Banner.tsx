
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BannerProps {
  title: string;
  subtitle?: string;
}

interface Breadcrumb {
  name: string;
  path: string;
  isActive?: boolean;  // Make isActive optional with the '?' operator
}

const Banner = ({ title, subtitle }: BannerProps) => {
  const location = useLocation();
  
  // Generate breadcrumbs based on the current path
  const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    
    return [
      { name: 'Home', path: '/' },
      ...paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join('/')}`;
        return {
          name: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
          path: url,
          isActive: index === paths.length - 1
        };
      })
    ];
  };
  
  const breadcrumbs = generateBreadcrumbs();

  return (
    <div className="breadcrumb-banner">
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="font-heading font-bold text-white text-2xl md:text-3xl lg:text-4xl mb-2 text-shadow animate-slide-down">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-white/80 max-w-2xl mb-4 animate-slide-down animate-delay-100">
            {subtitle}
          </p>
        )}
        
        <div className="flex items-center space-x-1 text-sm text-white/70 animate-slide-down animate-delay-200">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-3 w-3 mx-1 text-white/50" />}
              {crumb.isActive ? (
                <span className="text-white">{crumb.name}</span>
              ) : (
                <Link to={crumb.path} className="hover:text-primary transition-colors">
                  {crumb.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
