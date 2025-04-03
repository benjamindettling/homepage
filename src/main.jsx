import '@fortawesome/fontawesome-free/css/all.min.css';


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/main.scss';
import './index.css';
import App from './App.jsx';
import './i18n'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
