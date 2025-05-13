import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment.jsx";
import { ToastContainer } from "react-toastify";
import AboutUs from "./components/Appointment/Pages/AboutUs.jsx";
import Contact from "./components/Appointment/Pages/Contact.jsx";
import Team from "./components/Appointment/Pages/Team.jsx";
import Service from "./components/Appointment/Pages/Service.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/appointment",
    element: <Appointment />,
  },
  {
    path:'/about-us',
    element:<AboutUs/>
  },
  {
    path:'/team',
    element:<Team/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/service',
    element:<Service/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>
);
