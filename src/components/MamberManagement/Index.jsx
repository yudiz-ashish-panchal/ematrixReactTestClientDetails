import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import FormComponent from '../FormComponent/Index';

const MemberManagement = ({ groupID }) => {
  const [loading, setLoading] = useState(false)
  const [selectedMember, setSelectedMember] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    mobile: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false)
  const [members, setMembers] = useState([]);


  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members))
    setLoading(false)
  }, [members]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  const handleAddEditMember = (memberData) => {
    if (editMode) {
      // Edit existing member
      setMembers((prevMembers) =>
        prevMembers.map((member) => (member.id === selectedMember.id ? { ...member, ...memberData } : member))
      );
      setEditMode(false);
    } else {
      // Add new member
      setMembers((prevMembers) => [...prevMembers, { id: new Date().getTime(), ...memberData }]);
      setLoading(true)
    }

    setSelectedMember(null);
  };

  const handleEditClick = (member) => {
    setSelectedMember(member);
    setEditMode(true);
  };

  const handleDeleteClick = (member) => {
    setMembers((prevMembers) => prevMembers.filter((m) => m.id !== member.id));
    setSelectedMember(null);
  };

  return (
    <>
      {loading && <h1>Loading</h1>}
      <div className='client-Details'>
        <h2>Client Details</h2>
        <Button color="primary" onClick={() => setOpenAddForm(!openAddForm)}>{openAddForm ? "Add Form " : "close Form"}</Button>
        {openAddForm && <FormComponent
          selectedMember={selectedMember}
          setSelectedMember={setSelectedMember}
          handleAddEditMember={handleAddEditMember}
          editMode={editMode}
          errors={errors}
          setErrors={setErrors}
        />}
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentMembers.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.email}</td>
                <td>{member.mobile}</td>
                <td>

                  <Button color="primary" onClick={() => handleEditClick(member)} >Edit</Button>
                  <Button color="danger" onClick={() => handleDeleteClick(member)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div>
          {members.length > itemsPerPage && (
            <div>
              <span>Page:</span>
              {Array.from({ length: Math.ceil(members.length / itemsPerPage) }, (_, index) => (
                <Button key={index} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </Button>
              ))}
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default MemberManagement;


