import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { WorkoutProvider } from './contexts/WorkoutContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutProvider>
      <BrowserRouter>
        <App />
        <ToastContainer/>
      </BrowserRouter>
    </WorkoutProvider>
  </StrictMode>,
)
