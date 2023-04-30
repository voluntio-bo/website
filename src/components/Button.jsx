import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ color, onClick, text}) {
  return (
    <Stack spacing={2} direction="row" sx={{margin:2}}>
      <Button
        sx={{textTransform:'none'}}
        variant="contained"
        style={{ backgroundColor:color, borderRadius: 35, color: 'white' }}
        onClick={onClick}
      >{text}
      </Button>
    </Stack>
  );
}
