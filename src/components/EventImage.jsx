import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function EventCard({message}) {
    let sx = { width:0.90, borderRadius:4, padding:1.5, borderColor:"#d0d7de", background:"#f5f6f8" }
    return (
        <Card variant='outlined' sx={sx}>
            <CardContent>
                <Typography variant='h6' color="#1f2329">
                {message}
                </Typography>
            </CardContent>
        </Card>
    );
}