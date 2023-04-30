import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import defaultImage from '../assets/eventImage.PNG'
import Reaction from './Reaction';
import Avatar from './Avatar';
import { Box, padding } from '@mui/system';

export default function EventCard({eventId, eventName,eventDescription,eventImageUrl,eventDateTime}) {
  let sx = {width:0.85, borderRadius:4, background:"#FFFFFF",marginBottom:3, borderColor:"#B0AEB5"}
  let sxPaddings = {px:1.5, py:0.5}
  let organizationView = "/organization/"
  const navigate = useNavigate();

  return (
    
    <Card variant='outlined' sx={sx}>
      <Box sx={sxPaddings}>
        <CardHeader
            avatar={
                <Avatar  size={50} ></Avatar>
            }
            title="User Name"
            subheader={eventDateTime}
            sx={{ padding:1.5}}
            onClick={() => navigate(organizationView+eventId)}
        />
        <CardContent sx={{ display: 'flex', flexDirection:'column', padding:1.5}}>
            <Typography variant="h6" color="text.secondary" >
                {eventName}
            </Typography>
            <Box style={{ display: 'flex', flexDirection:'row'}}>
                <Typography variant="body2" color="text.secondary" >
                    {eventDescription}
                </Typography>
            </Box>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        width={1}
        margin={0}
        height="400"
        image={eventImageUrl}
        alt="Paella dish"
      />
      <Reaction/>


    </Card>
  );
}