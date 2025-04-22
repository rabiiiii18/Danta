import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Appointment from './components/Appointment/Appointment.jsx'


const router=createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:'/appointment',
    element:<Appointment/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />
</StrictMode>
)
