
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Next.js 15 would have a different entry point - this is the closest we can get
// with a Vite-based React app without modifying package.json
createRoot(document.getElementById("root")!).render(<App />);
