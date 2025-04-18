import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../public/build/index.css'

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
