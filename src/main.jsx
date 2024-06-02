import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DashboardContextProvider } from './context/DashboardContext.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <DashboardContextProvider>
        <App />
      </DashboardContextProvider>
    </AuthProvider>
  </React.StrictMode>,
)
