
import { useState } from 'react';
import Banner from '@/components/layout/Banner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Request = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contentType: 'movie',
    title: '',
    year: '',
    additionalInfo: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, contentType: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Request Submitted",
        description: "We've received your request and will process it soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        contentType: 'movie',
        title: '',
        year: '',
        additionalInfo: ''
      });
    }, 1500);
  };
  
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Request Content" 
        subtitle="Can't find what you're looking for? Let us know and we'll try to add it!" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Content Request Form</CardTitle>
              <CardDescription>
                Fill out the form below to request movies, TV series, tutorials, or documentaries
                that are not currently available on our site.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Content Type</Label>
                  <RadioGroup 
                    defaultValue="movie" 
                    value={formData.contentType}
                    onValueChange={handleRadioChange}
                    className="flex flex-wrap gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="movie" id="movie" />
                      <Label htmlFor="movie">Movie</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tv-series" id="tv-series" />
                      <Label htmlFor="tv-series">TV Series</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tutorial" id="tutorial" />
                      <Label htmlFor="tutorial">Tutorial</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="documentary" id="documentary" />
                      <Label htmlFor="documentary">Documentary</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter the title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="year">Year (if known)</Label>
                  <Input
                    id="year"
                    name="year"
                    placeholder="Enter the release year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    placeholder="Any additional details that might help us find the content"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Request;
