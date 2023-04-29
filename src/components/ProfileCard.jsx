import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Avatar from './Avatar';

import coverImage from '../assets/cover_bb.PNG'
import profileImage from '../assets/logo_bb.png'


export default function ProfileCard({ color, onClick, name,userName,description}) {
  name = "Best Buddies Bolivia"
  userName = "@BestBuddies"
  description = "Best Buddies es un movimiento global de inclusión social para personas con discapacidad intelectual desde amistades uno a uno y ahora esta en Bolivia."
  return (
    <Box
      sx={{
        border: `1px solid lightgray`,
        borderRadius: '15px',
        marginLeft: '50px',
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
            marginLeft="20%"
          >
            <Avatar
              sx={{
                border: '4px solid #FFFFFF'
              }}
              alt="Foto de perfil"
              size={140}
              src={profileImage}
            />
          </Box>

          <Box
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: "flex",
            flexDirection: "column",
            marginBottom: "25px"
              }}
            >
              <Typography variant="h7" sx={{ fontWeight: 'bold', marginTop: '7px'}}>
                {name}
              </Typography>
              <Typography variant="h9" color="text.secondary">
                {userName}
              </Typography>
              <Typography variant="body5" sx={{ margin: '20px'}} >
                {description}
            </Typography>
            <Typography variant="h10" color="text.secondary">
                350 siguiendo
              </Typography>
              <Typography variant="h10" color="text.secondary">
                2.677 seguidores
              </Typography>
        </Box>
      
    </Box>
  );
}
