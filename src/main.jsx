import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GridPanel from './gridPanel.jsx';
import './index.css';
import './gridPanel.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GridPanel />
  </StrictMode>
);
