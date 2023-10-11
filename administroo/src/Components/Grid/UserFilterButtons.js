import React from 'react';
import { Button } from '@mui/material';

const UserFilterButtons = ({ selectedUserTypes, onUserFilterChange, userTypes }) => {
  return (
    <div className="filter-buttons">
      {userTypes.map((userType) => (
        <Button
          sx={{ marginRight: '5px' , marginTop: '5px'}}
          key={userType}
          onClick={() => onUserFilterChange(userType)}
          variant={selectedUserTypes[userType] ? 'contained' : 'outlined'}
        >
          {userType}
        </Button>
      ))}
    </div>
  );
};

export default UserFilterButtons;
