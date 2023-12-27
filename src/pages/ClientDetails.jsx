import React from 'react'
import GroupManager from '../components/groupManager/Index'
import MemberManagement from '../components/MamberManagement/Index'
import { Row,Col } from 'reactstrap'
function ClientDetails() {
  return (
    <div className='mt-3 p-2'>
      <h1> Client Page</h1>
       <Row>
        <Col md={4} xl={4}>
        <GroupManager />
        </Col>
        <Col md={8} xl={8}>
          <MemberManagement />
        </Col>
      </Row>
    </div>
  )
}

export default ClientDetails
