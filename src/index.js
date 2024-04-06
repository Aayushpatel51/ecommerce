//core
import React from 'react';
import App from './App';
//libraries
import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
// styles
import './index.css'
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const container = document.getElementById('root');
const root = createRoot(container);


function AppSetup() {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

root.render(<AppSetup />)
