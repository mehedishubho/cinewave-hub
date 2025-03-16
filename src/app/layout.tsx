
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface RootLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function RootLayout({ 
  children, 
  title = 'EntertainmentHub',
  description = 'Discover movies, TV series, tutorials and documentaries all in one place.'
}: RootLayoutProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </>
  );
}
