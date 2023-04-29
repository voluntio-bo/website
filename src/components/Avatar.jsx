import * as React from 'react';
import Avatar from '@mui/material/Avatar';

export default function MyAvatar({ src, alt, size ,sx={}   }) {
  sx.width = size
  sx.height = size

  return (
    <Avatar
      src={src}
      alt={alt}
      sx={sx}
    />
  );
}
