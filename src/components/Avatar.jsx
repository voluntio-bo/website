import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function MyAvatar({ src, alt, size }) {
  return (
    <Avatar
      src={src}
      alt={alt}
      sx={{ width: size, height: size }}
    />
  );
}
