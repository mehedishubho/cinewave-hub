
import { useState } from 'react';
import Banner from '@/components/layout/Banner';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User } from 'lucide-react';
import Pagination from '@/components/common/Pagination';

// Mock data for demonstration
const mockBlogs = Array(16).fill(null).map((_, index) => ({
  id: `blog-${index}`,
  title: `Blog Post Title ${index + 1}`,
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  image: '/placeholder.svg',
  date: new Date(2023, (index % 12), (index % 28) + 1).toISOString(),
  author: 'John Doe',
  category: ['Entertainment', 'Movies', 'TV Shows', 'Technology'][index % 4],
}));

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(16);
  
  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = mockBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Blog" 
        subtitle="Latest news, updates, and articles about movies, TV shows, and the entertainment industry" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="text-sm text-muted-foreground flex items-center space-x-4">
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {formatDate(blog.date)}
                  </span>
                  <span className="flex items-center">
                    <User className="h-3 w-3 mr-1" /> {blog.author}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="px-0 text-primary hover:text-primary/80 hover:bg-transparent">
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Pagination 
            currentPage={currentPage}
            totalPages={Math.ceil(mockBlogs.length / blogsPerPage)}
            onPageChange={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
