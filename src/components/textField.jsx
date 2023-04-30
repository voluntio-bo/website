import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({name,value,handleInputChange}) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
            id="outlined-basic"  
            variant="outlined"
            name={name}
            value={value}
            onChange={handleInputChange}
            disabled={false}
            />
    </Box>
  );
}