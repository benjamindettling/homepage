import '@fortawesome/fontawesome-free/css/all.min.css';


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.scss';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
