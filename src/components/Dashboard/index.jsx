import React, { useState } from 'react'
import GroupManager from '../groupManager/Index'
import MemberManagement from '../MamberManagement/Index'
import { Col, Row } from 'reactstrap'

function Dashboard() {


  return (
    <>
      <h1>Dashboard page</h1> 

      <Row>
        <Col md={4} xl={4}>
        <GroupManager />
        </Col>
        <Col md={8} xl={8}>
          <MemberManagement />
        </Col>
      </Row>
      </>
  )
}

export default Dashboard
