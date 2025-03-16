
type Metadata = {
  title: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
    type?: 'website' | 'article';
    url?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    images?: string[];
  };
  alternates?: {
    canonical?: string;
  };
};

// Simulates Next.js metadata API
export function generateMetadata(pageMetadata: Metadata): Metadata {
  const defaultMetadata: Metadata = {
    title: 'Entertainment Hub',
    description: 'Discover movies, TV series, tutorials and documentaries all in one place.',
    keywords: ['movies', 'tv series', 'tutorials', 'documentaries'],
    openGraph: {
      type: 'website',
    }
  };

  return {
    ...defaultMetadata,
    ...pageMetadata,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...pageMetadata.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      ...pageMetadata.twitter,
    }
  };
}

export function simulateFetch(type: string, limit: number = 10) {
  console.log(`Simulating fetching ${limit} ${type} items`);
  return Promise.resolve(
    Array(limit).fill(null).map((_, index) => ({
      id: `${type}-${index}`,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} ${index + 1}`,
      poster: '/placeholder.svg',
      year: new Date().getFullYear(),
      type: type,
      language: 'English',
      rating: (Math.random() * 2 + 3).toFixed(1),
    }))
  );
}
