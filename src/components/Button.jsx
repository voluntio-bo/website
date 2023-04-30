import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ color, onClick, text, sx = {}}) {
  sx.textTransform = 'none'
  return (
    <Stack spacing={2} direction="row" sx={{margin:2}}>
      <Button
        sx={sx}
        variant="contained"
        style={{ backgroundColor:color, borderRadius: 35, color: 'white' }}
        onClick={onClick}
      >{text}
      </Button>
    </Stack>
  );
}
