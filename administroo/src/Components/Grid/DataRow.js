import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import MyTableCell from './MyTableCell';

const DataRow = React.memo(({ row, onToggle, userTypes, selectedUserTypes }) => {
  return (
    <>
      <TableCell>{row.method}</TableCell>
      <TableCell>{row.path}</TableCell>
        {userTypes.map((userType) => (
          <MyTableCell
            key={userType}
            row={row}
            userType={userType}
            onToggle={onToggle}
            selectedUserType={selectedUserTypes[userType]}
          />
        ))}
    </>
  );
});

export default DataRow;
