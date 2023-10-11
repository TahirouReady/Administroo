import React, { useState, useCallback, useEffect, createContext, useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Switch } from '@mui/material';
import ConvertDataToGrid from '../../Utils/ConvertDataToGrid';
import DataRow from './DataRow';
import SearchBar from './SearchBar';
import UserFilterButtons from './UserFilterButtons';
import MethodFilterButtons from './MethodFilterButtons';

let inputObject = require('./exemple_data.json');
const initialdata = ConvertDataToGrid(inputObject);


const Grid = () => {
  const [data, setData] = useState(initialdata);
  const [userTypes, setUserTypes] = useState(
    Object.keys(data[0]).filter((key) => key !== 'method' && key !== 'path' && key !== 'key')
  );
  const [searchValue, setSearchValue] = useState('');
  const [methodFilter, setMethodFilter] = useState('all');
  const [selectedUserTypes, setSelectedUserTypes] = useState(
    userTypes.reduce((acc, userType) => {
      return {
        ...acc,
        [userType]: true,
      };
    }, {})
  );
  console.log(data)

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleToggle = useCallback((key, column) => {
    setData((prevData) => {
      return prevData.map((row) => {
        if (row.key === key) {
          return {
            ...row,
            [column]: !row[column],
          };
        }
        return row;
      });
    });
  }, []);

  const onUserFilterChange = (userType) => {
    setSelectedUserTypes({ ...selectedUserTypes, [userType]: !selectedUserTypes[userType] });
  };

  const onMethodFilterChange = (methodType) => {
    setMethodFilter(methodType);
  }

  return (
    <TableContainer component={Paper}>
      <SearchBar onSearchChange={handleSearchChange} />
        <UserFilterButtons
          onUserFilterChange={onUserFilterChange}
          selectedUserTypes={selectedUserTypes}
          userTypes={userTypes}
        />
        <MethodFilterButtons
          onMethodFilterChange={onMethodFilterChange}
          methodFilter={methodFilter}
        />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Method</TableCell>
            <TableCell>Path</TableCell>
            {userTypes.map((userType) => (
              selectedUserTypes[userType] && <TableCell key={userType}>{userType}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.key} 
              sx={{
                display: row.path.toLowerCase().includes(searchValue.toLowerCase()) &&
                (row.method.toLowerCase().includes(methodFilter.toLowerCase()) ||
                methodFilter === 'all') ? 'table-row' : 'none'
              }}>
              <DataRow 
                key={row.key} 
                row={row} 
                onToggle={handleToggle} 
                userTypes={userTypes} 
                selectedUserTypes={selectedUserTypes}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Grid;