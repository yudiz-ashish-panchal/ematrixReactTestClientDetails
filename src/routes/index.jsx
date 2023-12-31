import React from 'react'
import { Routes, Route ,Navigate} from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Login from '../pages/Login'
import ClientDetails from '../pages/ClientDetails'
 
function RouteComponent() {
  return (
    <>
    <Routes>
    <Route element={<Login />} exact path='/auth/login'/>
    <Route element={<Dashboard />} exact path='/dashboard'/>
    <Route element={<ClientDetails />} exact path='/client-Details'/>
    <Route element={ <Navigate to='/auth/login' /> } path='/' />
    </Routes>
    </>
  )
}

export default RouteComponent
