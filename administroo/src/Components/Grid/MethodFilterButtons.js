import React from 'react';
import { Button } from '@mui/material';

const MethodFilterButtons = ({ methodFilter, onMethodFilterChange }) => {
  return (
    <div className="filter-buttons">
      <Button
        sx={{ marginRight: '5px' , marginTop: '5px'}}
        onClick={() => onMethodFilterChange("all")}
        variant={methodFilter === 'all' ? 'contained' : 'outlined'}
      >
        ALL
      </Button>
      <Button
        sx={{ marginRight: '5px' , marginTop: '5px'}}
        onClick={() => onMethodFilterChange("get")}
        variant={methodFilter === 'get' ? 'contained' : 'outlined'}
      >
        GET
      </Button>
      <Button
        sx={{ marginRight: '5px' , marginTop: '5px'}}
        
        onClick={() => onMethodFilterChange("post")}
        variant={methodFilter === 'post' ? 'contained' : 'outlined'}
      >
        POST
      </Button>
      <Button
        sx={{ marginRight: '5px' , marginTop: '5px'}}
        
        onClick={() => onMethodFilterChange("put")}
        variant={methodFilter === 'put' ? 'contained' : 'outlined'}
      >
        PUT
      </Button>
      <Button
        sx={{ marginRight: '5px' , marginTop: '5px'}}
        
        onClick={() => onMethodFilterChange("delete")}
        variant={methodFilter === 'delete' ? 'contained' : 'outlined'}
      >
        DELETE
      </Button>
      <Button
        sx={{ marginRight: '5px' , marginTop: '5px'}}
        
        onClick={() => onMethodFilterChange("patch")}
        variant={methodFilter === 'delete' ? 'contained' : 'outlined'}
      >
        patch
      </Button>
      
    </div>
  );
};

export default MethodFilterButtons;
