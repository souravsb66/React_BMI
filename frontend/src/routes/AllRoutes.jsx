import React from 'react'
import {Routes, Route} from "react-router-dom"
import PriavteRoute from './PriavteRoute'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={
        <PriavteRoute>
            <Home />
        </PriavteRoute>
        }/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile' element={
        <PriavteRoute>
            <Profile />    
        </PriavteRoute>
        }/>
    </Routes>
  )
}

export default AllRoutes