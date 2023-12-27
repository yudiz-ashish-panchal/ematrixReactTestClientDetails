import React from 'react'
import { Button, Input, Label } from 'reactstrap';

function Index (props) {
  const { selectedMember, setSelectedMember, handleAddEditMember, editMode} =props 

  const handleChange = (field, value) => {
    setSelectedMember({ ...selectedMember, [field]: value });
  };

  return (
    <div className= "px-3">
      <h2>Add/Edit Member</h2>
      <div>
        <Label htmlFor="firstName">First Name:</Label>
        <Input
          type="text"
          id="firstName"
          value={selectedMember ? selectedMember.firstName : ''}
          onChange={(e) => handleChange('firstName', e.target.value)}
        />

        <Label htmlFor="lastName">Last Name:</Label>
        <Input
          type="text"
          id="lastName"
          value={selectedMember ? selectedMember.lastName : ''}
          onChange={(e) => handleChange('lastName', e.target.value)}
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="text"
          id="email"
          value={selectedMember ? selectedMember.email : ''}
          onChange={(e) => handleChange('email', e.target.value)}
        />

        <Label htmlFor="mobile">Mobile Number:</Label>
        <Input
          type="number"
          id="mobile"
          value={selectedMember ? selectedMember.mobile : ''}
          onChange={(e) => handleChange('mobile', e.target.value)}
        />

        <Button onClick={() => handleAddEditMember(selectedMember)}>
          {editMode ? 'Edit Member' : 'Add Member'}
        </Button>
      </div>
    </div>
  )
}

export default Index
