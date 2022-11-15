import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import App from './App'
import './index.css'

import { DemoDiv } from './components/DemoDiv/DemoDiv'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/demo-div',
    element: <DemoDiv />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
