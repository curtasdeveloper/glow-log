import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster toastOptions={{
      style: {
        backgroundColor: '#1a1b1e',
        padding: '16px',
        color: '#fafafa',
      },
    }}
        position="top-center"
        reverseOrder={false}
      />
    <App />
  </StrictMode>,
)
