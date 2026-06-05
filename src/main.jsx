import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'   // все стили в одном файле

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)