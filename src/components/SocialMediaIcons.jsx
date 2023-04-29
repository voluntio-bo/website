import React , { useState } from 'react';

import { WhatsApp, Instagram, Facebook, Language } from '@mui/icons-material';


export default function SocialMediaIcons({sx={}}) {
    sx.fontSize="50px"
    sx.margin="15px"
    sx.color="#FF8324"
    return (
    <div >
      <WhatsApp sx={sx}/>
      <Instagram sx={sx}/>
      <Facebook sx={sx}/>
      <Language sx={sx}/>
    </div>
    );
}