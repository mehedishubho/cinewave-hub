
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const TvSeries = lazy(() => import("./pages/TvSeries"));
const TvSeriesDetail = lazy(() => import("./pages/TvSeriesDetail"));
const Tutorials = lazy(() => import("./pages/Tutorials"));
const TutorialDetail = lazy(() => import("./pages/TutorialDetail"));
const Documentary = lazy(() => import("./pages/Documentary"));
const Blog = lazy(() => import("./pages/Blog"));
const Request = lazy(() => import("./pages/Request"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const DMCA = lazy(() => import("./pages/DMCA"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
                <Route path="/tv-series" element={<TvSeries />} />
                <Route path="/tv-series/:id" element={<TvSeriesDetail />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/tutorials/:id" element={<TutorialDetail />} />
                <Route path="/documentary" element={<Documentary />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/request" element={<Request />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/dmca" element={<DMCA />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
