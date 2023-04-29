import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import defaultImage from '../assets/eventImage.PNG'
import Reaction from './Reaction';
import Avatar from './Avatar';

export default function EventCard() {
  let sx = {width:0.85, borderRadius:4, padding:1.5,borderColor:"#d0d7de", background:"#f5f6f8"}
  const [expanded, setExpanded] = React.useState(false);
  const [showMoreText, setShowMoreText] = React.useState("ver mas...");

  const handleExpandClick = () => {
    setExpanded(!expanded);
    if(expanded){
        setShowMoreText("ver mas...")
    }else{
        setShowMoreText("ver menos...")
    }
  };

  return (
    
    <Card variant='outlined' sx={sx}>
      <CardHeader
        avatar={
            <Avatar  size={50} ></Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />


    <CardContent style={{ display: 'flex'}} >
        <Typography variant="body2" color="text.secondary" >
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            <Typography variant="body2" color="text.secondary" onClick={handleExpandClick}>{showMoreText}</Typography>
        </Typography>
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