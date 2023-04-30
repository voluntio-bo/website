import * as React from 'react';
import EventCard from './EventCard';
import List from '@mui/material/List';

export default function Wall({events}) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', display:'flex', flexDirection:'column', alignItems:'center'}}>
      {events.map((n,i)=>{
        return (<>
            <EventCard organizationId={n.organizationId} eventName={n.name} eventDescription={n.description} eventImageUrl={n.imagePath} eventDateTime={n.eventDate} organizationName={n.organizationName } ></EventCard>
        </>)})}
    </List>
  )};