import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ color, onClick }) {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        style={{ backgroundColor: color, borderRadius: 35, color: 'white' }}
        onClick={onClick}
      >
        Contained
      </Button>
    </Stack>
  );
}
