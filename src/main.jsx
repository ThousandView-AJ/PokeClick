import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GridPanel from './gridPanel.jsx';
import './index.css';
import './gridPanel.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <h1>NineCLICK</h1>
      <div className="score">
        <div className="bestScore">Best Score: 0</div>
        <div className="currentScore">Current Score: 0</div>
      </div>
    </header>
    <main>
      <GridPanel />
    </main>
  </StrictMode>
);
