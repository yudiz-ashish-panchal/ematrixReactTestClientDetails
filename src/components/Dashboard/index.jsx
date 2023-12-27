import React, { useEffect, useState } from 'react'

import { Col, Row } from 'reactstrap'
import { useNavigate,Link } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  const token = localStorage.getItem("password")
  console.log('token', token)


  useEffect(()=>{

    if (!token) {
      console.log("ete")
      navigate("/auth/login")
    }
  },[token])
  return (
    <>
      <h1>Dashboard page</h1> 
      <Link to="/client-Details"> go to Client Page</Link>
     
      </>
  )
}

export default Dashboard
