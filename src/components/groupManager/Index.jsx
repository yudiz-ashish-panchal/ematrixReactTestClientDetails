import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const GroupManagement = () => {
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([]);
  const [editingGroupId, setEditingGroupId] = useState(null);

  // Load groups from local storage when the component mounts
  const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
  useEffect(() => {
    if (storedGroups) {
      setGroups(storedGroups);
    }
  }, []);

  useEffect(() => {
    // Save groups to local storage whenever groups change
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);



  const addGroup = () => {
    if (groupName.trim() === '') return;

    if (editingGroupId !== null) {
      // Editing existing group
      setGroups((prevGroups) =>
        prevGroups.map((group) =>
          group.id === editingGroupId ? { ...group, name: groupName } : group
        )
      );
      setEditingGroupId(null);
    } else {
      // Adding new group
      setGroups((prevGroups) => [
        ...prevGroups,
        { id: new Date().getTime(), name: groupName, member: [] },
      ]);
    }

    setGroupName('');
  };

  const editGroup = (groupId) => {
    const groupToEdit = groups.find((group) => group.id === groupId);
    if (groupToEdit) {
      setGroupName(groupToEdit.name);
      setEditingGroupId(groupId);
    }
  };

  const deleteGroup = (groupId) => {
    setGroups((prevGroups) => prevGroups.filter((group) => group.id !== groupId));
  };

  return (
    <div className='group-management'>
      <h2>Group Management</h2>
      <div className='input-div'>
        <label htmlFor="groupName">Group Name:</label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <Button color='success' onClick={addGroup}>
          {editingGroupId !== null ? 'Edit Group' : 'Add Group'}
        </Button>
      </div>
      <table className='mx-2'>
        <thead>
          <tr>
            <th>Group Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {groups.map((group) => (
            <tr key={group.id}>
              {group.name}
              <td>
                <Button color='primary' onClick={() => editGroup(group.id)}>Edit</Button>
              </td>
              <td>
                <Button color='danger' onClick={() => deleteGroup(group.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul >

      </ul>
    </div>
  );
};

export default GroupManagement;
