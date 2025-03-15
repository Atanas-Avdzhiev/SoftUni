import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LoadingProvider } from './contexts/LoadingContext'

createRoot(document.getElementById('root')).render(
  <LoadingProvider>
    <App />
  </LoadingProvider>
)