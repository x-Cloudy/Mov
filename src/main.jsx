import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import MainContent from './assets/components/MainContent/MainContent.jsx'
import { Video, VideoId } from './assets/components/Video/Video.jsx'
import './index.css'

import { InfoProvider } from './assets/context/InfoContext.jsx'

const router = createBrowserRouter([
  {
    path: '/Mov',
    element: <App />,
    children: [
      {
        path: '/Mov',
        element: <MainContent />
      },
      {
        path: 'search',
        element: <p>teste</p>
      }
    ]
  },
  {
    path: '/Mov/Video',
    element: <Video />,
    children: [
      {
        path: ':id',
        element: <VideoId />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoProvider>
      <RouterProvider router={router} />
    </InfoProvider>
  </React.StrictMode>,
)
