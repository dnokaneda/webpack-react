import React from 'react'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import { Home, Contact } from './pages'
import './styles.css'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Contact',
      element: <Contact />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
      <br />
      <p><b>ENV MODE:</b> { process.env.MODE }</p>
      <p><b>ENV API_KEY:</b> { process.env.API_KEY }</p>
    </>
  )
}

export default App