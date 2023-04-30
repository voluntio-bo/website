import { useState } from 'react';
import { Stack, Chip, Avatar } from '@mui/material';

export default function MyChip({ label, src }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const color = isSelected ? 'orange' : 'default';

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={<Avatar src={src} />}
        label={label}
        variant="outlined"
        color={color}
        onClick={handleClick}
      />
    </Stack>
  );
}
