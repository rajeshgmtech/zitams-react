import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Login from './Pages/login.jsx'
import Home from './Pages/home.jsx'
import DataManager from './Pages/DataManager.jsx'
import AddCustomer from './Pages/AddCustomer.jsx'
import CustomerSettings from './Pages/CustomerSettings.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Login />} />
      <Route path="HomeDashboard" element={<Home />} />
      <Route path="DataManager" element={<DataManager />} />
      <Route path="AddCustomer" element={<AddCustomer />} />
      <Route path="CustomerSettings" element={<CustomerSettings />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
