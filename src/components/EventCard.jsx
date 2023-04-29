import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import defaultImage from '../assets/eventImage.PNG'
import Reaction from './Reaction';
import Avatar from './Avatar';
import { Box } from '@mui/system';

export default function EventCard({eventName,eventDescription}) {
  let sx = {width:0.85, borderRadius:4, padding:1.5,borderColor:"#d0d7de", background:"#f5f6f8"}
  const [expanded, setExpanded] = React.useState(false);
  const [showMoreText, setShowMoreText] = React.useState("ver mas...");

  const handleExpandClick = () => {
    setExpanded(!expanded);
    if(expanded){
        setShowMoreText(" ver mas...")
    }else{
        setShowMoreText(" ver menos...")
    }
  };

  return (
    
    <Card variant='outlined' sx={sx}>
      <CardHeader
        avatar={
            <Avatar  size={50} ></Avatar>
        }
        title="User Name"
        subheader="September 14, 2016"
      />


    <CardContent sx={{ display: 'flex', flexDirection:'column'}}>
        <Typography variant="h6" color="text.secondary" >
            {eventName}
        </Typography>
        <Box style={{ display: 'flex', flexDirection:'row'}}>
            <Typography variant="body2" color="text.secondary" >
                {eventDescription}
            </Typography>
            <Typography sx={{marginLeft:1}} variant="body2" color="text.secondary" onClick={handleExpandClick}>{showMoreText}</Typography>
        </Box>

      </CardContent>

      <Collapse in={expanded} timeout="auto">
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            Continuous ...This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
        </Typography>
        </CardContent>
      </Collapse>

      <CardMedia
        component="img"
        height="194"
        image={defaultImage}
        alt="Paella dish"
      />

      <Reaction/>


    </Card>
  );
}