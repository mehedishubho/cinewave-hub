
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Send, Mail } from 'lucide-react';

const Footer = () => {
  // Mock data for the footer lists
  const latestMovies = [
    { id: 1, title: 'Oppenheimer', path: '/movies/oppenheimer' },
    { id: 2, title: 'Dune: Part Two', path: '/movies/dune-part-two' },
    { id: 3, title: 'The Batman', path: '/movies/the-batman' },
    { id: 4, title: 'Interstellar', path: '/movies/interstellar' },
  ];

  const latestTvSeries = [
    { id: 1, title: 'House of the Dragon', path: '/tv-series/house-of-the-dragon' },
    { id: 2, title: 'Breaking Bad', path: '/tv-series/breaking-bad' },
    { id: 3, title: 'Stranger Things', path: '/tv-series/stranger-things' },
    { id: 4, title: 'Game of Thrones', path: '/tv-series/game-of-thrones' },
  ];

  const latestTutorials = [
    { id: 1, title: 'React Basics', path: '/tutorials/react-basics' },
    { id: 2, title: 'Advanced JavaScript', path: '/tutorials/advanced-javascript' },
    { id: 3, title: 'Python for Data Science', path: '/tutorials/python-data-science' },
    { id: 4, title: 'Swift UI Development', path: '/tutorials/swift-ui-development' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Send, label: 'Telegram', href: 'https://telegram.org' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-cine-dark to-cine-dark/90 text-white">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-cine-primary to-cine-secondary">
                CineWave
              </span>
            </Link>
            <p className="mt-4 text-gray-300 text-sm">
              CineWave is your premier destination for the latest movies, TV series, tutorials, and documentaries. 
              We provide high-quality content across multiple genres and categories to enhance your entertainment and learning experience.
            </p>
          </div>

          {/* Latest Movies */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white/90 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-primary after:mt-1">Latest Movies</h3>
            <ul className="space-y-2">
              {latestMovies.map((movie) => (
                <li key={movie.id}>
                  <Link to={movie.path} className="text-gray-300 hover:text-primary text-sm transition-colors">
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest TV Series */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white/90 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-primary after:mt-1">Latest TV Series</h3>
            <ul className="space-y-2">
              {latestTvSeries.map((series) => (
                <li key={series.id}>
                  <Link to={series.path} className="text-gray-300 hover:text-primary text-sm transition-colors">
                    {series.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Latest Tutorials */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white/90 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-primary after:mt-1">Latest Tutorials</h3>
            <ul className="space-y-2">
              {latestTutorials.map((tutorial) => (
                <li key={tutorial.id}>
                  <Link to={tutorial.path} className="text-gray-300 hover:text-primary text-sm transition-colors">
                    {tutorial.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info - Separate Row */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white/90 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-primary after:mt-1">Contact Us</h3>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="text-primary h-5 w-5" />
                <a href="mailto:admin@cinedroid.com" className="text-gray-300 hover:text-primary transition-colors">
                  admin@cinedroid.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white/90 after:content-[''] after:block after:w-8 after:h-0.5 after:bg-primary after:mt-1">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-primary text-white p-2.5 rounded-full transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/30 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} CineWave. All rights reserved. Designed by <a href="https://wpmhs.com" className="text-primary hover:underline">MHS</a>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/dmca" className="text-gray-400 hover:text-primary transition-colors">
              DMCA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
