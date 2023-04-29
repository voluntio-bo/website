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
import { Box, padding } from '@mui/system';

export default function EventCard({eventName,eventDescription}) {
  let sx = {width:0.85, borderRadius:4, background:"#FFFFFF",marginBottom:3, borderColor:"#B0AEB5"}
  let sxPaddings = {px:1.5, py:0.5}
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
      <Box sx={sxPaddings}>
        <CardHeader
            avatar={
                <Avatar  size={50} ></Avatar>
            }
            title="User Name"
            subheader="September 14, 2016"
            sx={{ padding:1.5}}
        />
        <CardContent sx={{ display: 'flex', flexDirection:'column', padding:1.5}}>
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
      </Box>
      

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
        width={1}
        margin={0}
        height="400"
        image={defaultImage}
        alt="Paella dish"
      />
      <Reaction/>


    </Card>
  );
}