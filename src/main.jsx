import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Route.jsx'
import NewsDataProvider from './Components/ContextProvider/NewsDataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsDataProvider>
      <RouterProvider router={router}></RouterProvider>
    </NewsDataProvider>
  </StrictMode>,
)
