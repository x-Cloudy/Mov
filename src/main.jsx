import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import MainContent from './assets/components/MainContent/MainContent.jsx'
import Search from './assets/components/Search/Search.jsx'
import { Video, VideoId } from './assets/components/Video/Video.jsx'
import './index.css'

import { WordProvider } from './assets/context/InfoContext.jsx'

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
        element: <Search />
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
    <WordProvider>
      <RouterProvider router={router} />
    </WordProvider>
  </React.StrictMode>,
)
