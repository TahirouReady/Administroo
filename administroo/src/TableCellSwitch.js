import React from 'react';
import TableCell from '@mui/material/TableCell';
import Switch from '@mui/material/Switch';

function TableCellSwitch({ checked, onChange }) {
  return (
    <TableCell>
      <Switch checked={checked} onChange={onChange} />
    </TableCell>
  );
}

export default React.memo(TableCellSwitch);
