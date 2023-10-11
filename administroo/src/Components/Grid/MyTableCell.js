import React, { memo, useContext } from 'react';
import { TableCell, Switch } from '@mui/material';

const MyTableCell = memo(({ row, userType, onToggle, selectedUserType }) => {
  return (
    <>
      {selectedUserType && (
        <TableCell key={userType}>
          <Switch
            checked={row[userType]}
            onChange={() => onToggle(row.key, userType)}
          />
        </TableCell>
      )}
    </>
  );
});

export default MyTableCell;
