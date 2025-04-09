import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

const img = new Image();
img.src = "../src/assets/fav.png";
img.onload = () => {
  console.log(`Width: ${img.width}, Height: ${img.height}`);
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
