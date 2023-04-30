import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import VerifiedIcon from '@mui/icons-material/Verified';
import defaultImage from '../assets/eventImage.PNG'
import Reaction from './Reaction';
import Avatar from './Avatar';
import { Box, padding } from '@mui/system';
import { CardActions } from '@mui/material';
import BasicButtons from './Button';
import axios from "axios";
import { useState , useEffect} from 'react';

export default function EventCard({organizationId, eventName,eventDescription,eventImageUrl,eventDateTime,organizationName}) {
  let sx = {width:0.85, borderRadius:4, background:"#FFFFFF",marginBottom:3, borderColor:"#cfd9de"}
  let sxPaddings = {px:1.5, py:0.5}
  let organizationView = "/organization/"
  const navigate = useNavigate();
  let eventDateFormated = new Date(eventDateTime);
  eventDateFormated = eventDateFormated.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const urlOrganization = "https://voluntio-api.azurewebsites.net/api/organizations/"+organizationId
  const [organization, setOrganization] = useState([])
  
  const fetchOrganizationData = () => {
      var responseOrganizationData = axios(urlOrganization);
      axios.all([responseOrganizationData]).then(
          axios.spread((...allData) => {
              var dataBK = allData[0].data
              setOrganization(dataBK)
          })
  )}
  useEffect(() => { 
    fetchOrganizationData();
  }, []);
  let eventMedia = eventImageUrl ? (<CardMedia
  component="img"
  width={1}
  margin={0}
  height="400"
  image={eventImageUrl}
  alt="Paella dish"
  />) : null;
  return (
    
    <Card variant='outlined' sx={sx}>
      <Box sx={sxPaddings}>
        <CardHeader
            avatar={
              <Avatar  size={50} src={organization.profileImagePath}/>
            }
            title={
              <Box sx={{display:'flex',alignItems:'center'}}>
                {organizationName}
                <VerifiedIcon color='primary' fontSize='15' sx={{marginLeft:0.75}}></VerifiedIcon>
              </Box>
            }
            subheader={eventDateFormated}
            sx={{ padding:1.5}}
            onClick={() => navigate(organizationView+organizationId)}
        >
        </CardHeader>
        <CardContent sx={{ display: 'flex', flexDirection:'column', padding:1.5}}>
            <Typography variant="h6" color="text.primary" >
                {eventName}
            </Typography>
            <Box style={{ display: 'flex', flexDirection:'row'}}>
                <Typography variant="body1" color="text.secondary" >
                    {eventDescription}
                </Typography>
            </Box>
        </CardContent>
      </Box>
      {eventMedia}
      
      <CardActions sx={{display:'flex', flexDirection:'row', justifyContent: 'space-between' }}>
      <Reaction/>
      <BasicButtons text={"Inscribirme ahora"} ></BasicButtons>
      </CardActions>


    </Card>
  );
}