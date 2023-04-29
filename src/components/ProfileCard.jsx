import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Avatar from './Avatar';

import coverImage from '../assets/cover_bb.PNG'
import profileImage from '../assets/logo_bb.png'


export default function ProfileCard({ color, onClick, name,userName}) {
  name = "Best Buddies Bolivia"
  userName = "@BestBuddies"
  return (
    <Box
      sx={{
        border: `1px solid lightgray`,
        borderRadius: '15px'
      }}
      >
          <CardMedia
            component="img"
            height="100"
            src={coverImage}
            alt="Foto de portada"
            sx={{ borderTopLeftRadius : '15px' , borderTopRightRadius : '15px'}}
          />
          <Box
            position="relative"
            display="inline-block"
            marginTop="-50px"
            marginLeft="60px"
          >
            <Avatar
              sx={{
                width: '50%',
                border: '4px solid #FFFFFF'
              }}
              alt="Foto de perfil"
              size={100}
              src={profileImage}
            />
          </Box>

          <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h7" sx={{ fontWeight: 'bold', marginTop: '7px'}}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userName}
        </Typography>
        </Box>
      
    </Box>
  );
}
