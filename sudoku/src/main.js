// Import React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Import your App component
import App from './App.jsx'

// Import styles
import './style.css'

// Tell React to render your App in the #app div
ReactDOM.createRoot(document.getElementById('app')).render(
  <App />
)